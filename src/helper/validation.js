import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('유효하지 않은 이메일 형식입니다.')
    .required('이메일을 입력해주세요.'),
  password: Yup.string().required('패스워드를 입력해주세요.'),
})
