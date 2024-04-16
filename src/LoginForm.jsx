import { FormControl, FormHelperText, TextField, Typography ,Button, InputLabel, Input, InputAdornment, IconButton} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Password } from '@mui/icons-material';

const LoginForm = () => {
    return (
        <div>
            <Formik initialValues={{
                email:"",
                Password:""
            }} validationSchema={Yup.object({
                email: Yup.string()
                  .email("Must be valid email.")
                  .max(50, "Email must be at max 50 characters.")
                  .trim()
                  .lowercase()
                  .required("Email is required."),
      
                Password: Yup.string()
                  .required("Password is required.")
                  .trim()
                  .max(21, "Password must be at max 21 characters."),
              })} 
              onSubmit={(values)=>{
                console.log(values)
              }}>
                {
                    (formik)=>{
                        return(
                            <form onSubmit={formik.handleSubmit} style={{
                                padding: "1rem",
                                display: "flex",
                                flexDirection: "column",
                                width: "400px",
                                gap: "1rem",
                                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                              }}>
                                <Typography variant="h3">Login</Typography>
                               
                                <FormControl> 
                                    <TextField label="email" {...formik.getFieldProps("email")}/>
                                    {formik.touched.email && formik.errors.email ?(<FormHelperText error>{formik.errors.email}</FormHelperText>):null}

                                </FormControl>
                                <FormControl> 
                                    <TextField label="Password" {...formik.getFieldProps("Password")} />
                                    {formik.touched.Password && formik.errors.Password ?(<FormHelperText error>{formik.errors.Password}</FormHelperText>):null}
                                   

                                </FormControl>
   
    
                                <Button type="submit" color="secondary" variant="contained" >Login</Button>
                              </form>
                        )
                    }
                }
              </Formik>
        </div>
      )
}

export default LoginForm
// import { FormControl, FormHelperText, TextField, Typography, Button, InputAdornment, IconButton } from '@mui/material'
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { Formik } from 'formik'
// import React, { useState } from 'react'
// import * as Yup from "yup"

// const LoginForm = () => {
//     const [showPassword, setShowPassword] = useState(false);

//     return (
//         <div>
//             <Formik initialValues={{
//                 email:"",
//                 password:""
//             }} validationSchema={Yup.object({
//                 email: Yup.string()
//                     .email("Must be valid email.")
//                     .max(50, "Email must be at max 50 characters.")
//                     .trim()
//                     .lowercase()
//                     .required("Email is required."),

//                 password: Yup.string()
//                     .required("Password is required.")
//                     .trim()
//                     .max(21, "Password must be at max 21 characters."),
//             })}
//             onSubmit={(values)=>{
//                 console.log(values)
//             }}>
//                 {(formik)=>{
//                     return(
//                         <form onSubmit={formik.handleSubmit} style={{
//                             padding: "1rem",
//                             display: "flex",
//                             flexDirection: "column",
//                             width: "400px",
//                             gap: "1rem",
//                             boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//                         }}>
//                             <Typography variant="h3">Login</Typography>
                           
//                             <FormControl> 
//                                 <TextField label="Email" {...formik.getFieldProps("email")} />
//                                 {formik.touched.email && formik.errors.email ?(<FormHelperText error>{formik.errors.email}</FormHelperText>):null}
//                             </FormControl>
//                             <FormControl> 
//                                 <TextField 
//                                     label="Password" 
//                                     type={showPassword ? 'text' : 'password'}
//                                     {...formik.getFieldProps("password")} 
//                                     InputProps={{
//                                         endAdornment: (
//                                             <InputAdornment position="end">
//                                                 <IconButton
//                                                     aria-label="toggle password visibility"
//                                                     onClick={() => setShowPassword(!showPassword)}
//                                                     edge="end"
//                                                 >
//                                                     <VisibilityIcon />
//                                                 </IconButton>
//                                             </InputAdornment>
//                                         ),
//                                     }}
//                                 />
//                                 {formik.touched.password && formik.errors.password ?(<FormHelperText error>{formik.errors.password}</FormHelperText>):null}
//                             </FormControl>

//                             <Button type="submit" color="secondary" variant="contained" >Login</Button>
//                         </form>
//                     )
//                 }}
//             </Formik>
//         </div>
//     )
// }

// export default LoginForm
