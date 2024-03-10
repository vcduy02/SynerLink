import {Button, Modal, Input, Form, Spin} from 'antd';
import {EyeTwoTone, EyeInvisibleOutlined, LoadingOutlined  } from '@ant-design/icons';
import { signup } from '../../../services/auth';
import { useState } from 'react';
import { useStore } from '../../../hook';
import useAuthMutation from '../../../hook/useAuthMutation';

const Signup = ({checkWallet, handleCancel}) => {
  
  const [confirmLoading, setConfirmLoading] = useState(false);
  const {messageApi} = useStore()

  // const {onSubmit, isSuccess} = useAuthMutation('SIGNUP')

  // console.log(isSuccess);

  
  const onSubmit = (body) => {

    setConfirmLoading(true)


    signup(body).then(({data}) => {

      setConfirmLoading(false)
      handleCancel('signup');
      localStorage.setItem('wallet_address', data.result.wallet_address)
      messageApi.open({type: 'success', content: 'Đăng nhập thành công'})

    })

  }

  return (
    <Modal 
    title="Đăng kí" 
    open={checkWallet} 
    confirmLoading={confirmLoading}
    onCancel={() => handleCancel('signup')} 
    footer=""
    >
      <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmit}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Nhập vào mật khẩu của bạn',
            },
          ]}
        >
          <Input.Password 
            placeholder="Mật khẩu" 
            style={{ 
              marginBottom: ""
            }}
          />
        </Form.Item>
        <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Nhập xác nhận mật khẩu',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Mật khẩu xác nhận không khớp'));
            },
          }),
        ]}
        >
          <Input.Password
            placeholder="Xác nhận mật khẩu"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
        <Form.Item>
          <Button 
          style={{
            backgroundColor: "rgb(18 18 18/4%)", 
            border: "rgba(255, 255, 255, 0.12)", 
            fontWeight: "bold", 
            marginRight: "20px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          htmlType="submit"
          >
            {confirmLoading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> : 'Đăng kí'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Signup