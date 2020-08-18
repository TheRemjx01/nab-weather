import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import debounce from 'lodash/debounce'

import { getLocationUrl } from "./utils";

import WithFetch from "../with-fetch";
import getUrl from "../../utils/url";

import './SearchBar.css'

const Loading = ({SearchBar}) => React.cloneElement(SearchBar, {
    disabled: true,
    loading: true,
});

const SearchBarError = ({error, SearchBar}) => {
    const errorString = error.message;
    return <>
        {SearchBar}
        {errorString}
    </>
};

const generateOptions = ({data = []}) => {
    const options = data.map(({woeid, title}) => ({label: title, value: woeid.toString()}))
    if (options.length === 0) {
        return [{label: 'Not found', value: null, disabled: true}]
    }
    return options
};

const SearchDataResult = ({data = [], SearchBar}) => {
    const CloneSearchBar = React.cloneElement(SearchBar, {
        options: generateOptions({data}),
        open: true,
    });
    return <>
        {CloneSearchBar}
    </>
};


const SearchBar = ({ onChange }) => {
    const [text, setText] = useState('');
    const handleOnChange= (e, option) => {
        setText('');
        onChange(option);
    };

    const throttledSetText = debounce(setText, 800);
    let BaseAutocomplete = <AutoComplete allowClear
                                         autoFocus
                                         onSelect={handleOnChange}
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
            LoadingComponent={<Loading SearchBar={BaseAutocomplete} />}
            ErrorComponent={<SearchBarError SearchBar={BaseAutocomplete}/>}
        />

    );
};

export default SearchBar;