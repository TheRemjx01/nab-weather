import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import debounce from 'lodash/debounce'

import WithFetch from "../with-fetch";
import getUrl from "../../utils/url";

import './SearchBar.css'
import queryString from "query-string";

export const SearchBarLoading = ({SearchBar}) => React.cloneElement(SearchBar, {
    disabled: true,
    loading: true,
});

export const SearchBarError = ({error, SearchBar}) => {
    const errorString = error.message;
    return <>
        {SearchBar}
        {errorString}
    </>
};

export const generateOptions = ({data = []}) => {
    const options = data.map(({woeid, title}) => ({label: title, value: woeid.toString()}))
    if (options.length === 0) {
        return [{label: 'Not found', value: null, disabled: true}]
    }
    return options
};

export const SearchDataResult = ({data = [], SearchBar}) => {
    return React.cloneElement(SearchBar, {
        options: generateOptions({data}),
        open: true,
    });
};

export const handleOnChange = ({ onChange, setText }) => (e, option) => {
    setText('');
    onChange(option);
}

export const getLocationUrl = (text) => {
    const query = {
        query: text
    };
    return `/location/search?${queryString.stringify(query)}`
};


export const SearchBar = ({ onChange }) => {
    const [text, setText] = useState('');
    const throttledSetText = debounce(setText, 800);
    let BaseAutocomplete = <AutoComplete allowClear
                                         autoFocus
                                         onSelect={handleOnChange({setText, onChange})}
                                         onSearch={throttledSetText}
                                         className="searchBar"
                                         defaultValue={text}
    >
        <Input size="large" placeholder="search" prefix={<SearchOutlined />}/>
    </AutoComplete>;

    if (!text) {
        return BaseAutocomplete
    }

    return (
        <WithFetch
            url={getUrl(getLocationUrl(text))}
            Component={<SearchDataResult SearchBar={BaseAutocomplete} />}
            LoadingComponent={<SearchBarLoading SearchBar={BaseAutocomplete} />}
            ErrorComponent={<SearchBarError SearchBar={BaseAutocomplete}/>}
        />

    );
};

export default SearchBar;