import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('유효하지 않은 이메일 형식입니다.')
    .required('이메일을 입력해주세요.'),
  password: Yup.string().required('패스워드를 입력해주세요.'),
})

export const registValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('유효하지 않은 이메일 형식입니다.')
    .required('이메일을 입력해주세요.'),
  password: Yup.string().required('패스워드를 입력해주세요.'),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
    '패스워드가 일치하지 않습니다.'
  ),
})
