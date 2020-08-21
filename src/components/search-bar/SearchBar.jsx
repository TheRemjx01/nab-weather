import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import debounce from "lodash/debounce";

import WithFetch from "../with-fetch";
import getUrl from "../../utils/url";

import "./SearchBar.css";
import queryString from "query-string";

export const SearchBarLoading = ({ SearchBar }) =>
  React.cloneElement(SearchBar, {
    disabled: true,
    loading: true,
  });

SearchBarLoading.propTypes = {
  SearchBar: PropTypes.node.isRequired,
};

export const SearchBarError = ({ error, SearchBar }) => {
  const errorString = error.message;
  return (
    <Fragment>
      {SearchBar}
      {errorString}
    </Fragment>
  );
};

const ErrorType = PropTypes.shape({
  message: PropTypes.string.isRequired,
});

SearchBarError.propTypes = {
  SearchBar: PropTypes.node.isRequired,
  error: ErrorType,
};

export const generateOptions = ({ data = [] }) => {
  const options = data.map(({ woeid, title }) => ({
    label: title,
    value: woeid.toString(),
  }));
  if (options.length === 0) {
    return [{ label: "Not found", value: null, disabled: true }];
  }
  return options;
};

export const SearchDataResult = ({ data = [], SearchBar }) => {
  return React.cloneElement(SearchBar, {
    options: generateOptions({ data }),
    open: true,
  });
};

export const handleOnChange = ({ onChange, setText }) => (e, option) => {
  setText("");
  onChange(option);
};

export const getLocationUrl = (text) => {
  const query = {
    query: text,
  };
  return `/location/search?${queryString.stringify(query)}`;
};

export const SearchBarRender = ({ text, SearchBar }) => {
  if (!text) {
    return SearchBar;
  }

  return (
    <WithFetch
      url={getUrl(getLocationUrl(text))}
      Component={<SearchDataResult SearchBar={SearchBar} />}
      LoadingComponent={<SearchBarLoading SearchBar={SearchBar} />}
      ErrorComponent={<SearchBarError SearchBar={SearchBar} />}
    />
  );
};

SearchBarRender.propTypes = {
  text: PropTypes.string,
  SearchBar: PropTypes.node.isRequired,
};

export const SearchBar = ({ onChange }) => {
  const [text, setText] = useState("");
  const throttledSetText = debounce(setText, 800);
  let BaseAutocomplete = (
    <AutoComplete
      allowClear
      autoFocus
      onSelect={handleOnChange({ setText, onChange })}
      onSearch={throttledSetText}
      className="searchBar"
      defaultValue={text}
    >
      <Input size="large" placeholder="search" prefix={<SearchOutlined />} />
    </AutoComplete>
  );

  return <SearchBarRender text={text} SearchBar={BaseAutocomplete} />;
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
