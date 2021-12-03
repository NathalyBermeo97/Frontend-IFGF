import { DatePicker, Space } from 'antd';
import * as ReactDOM from "react-dom";

function onChange(date, dateString) {
    console.log(date, dateString);
}

ReactDOM.render(
    <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
    </Space>,
    mountNode,
);