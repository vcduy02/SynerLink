import {message} from 'antd';

const Message = () => {

    const [messageApi, contextHolder] = message.useMessage();

    return [messageApi, contextHolder]
}

export default Message