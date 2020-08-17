import React, {useState} from 'react';
import { AutoComplete, Input } from 'antd';
import debounce from 'lodash/debounce'
import WithFetch from "../with-fetch/WithFetch";
import getUrl from "../../utils/url";
import {getLocationUrl} from "./utils";

const Option = AutoComplete.Option;

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

const generateOptions = ({data = []}) => data.map(({woeid, title}) => ({label: title, value: woeid}));

const SearchDataResult = ({data = [], SearchBar}) => {
    const CloneSearchBar = React.cloneElement(SearchBar, {
        options: generateOptions({data}),
        open: true,
    });
    return <>
        {CloneSearchBar}
    </>
};


const SearchBar = ({ onChange, setLoading }) => {
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
                                         style={{minWidth: '200px'}}
                                         defaultValue={text}
    />;
    if (!text) {
        return BaseAutocomplete
    }

    console.log({text});

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