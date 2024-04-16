import {
    Typography,
    TextField,
    FormControl,
    Button,
    FormHelperText,
  } from "@mui/material";
import { Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"

const RegisterForm = () => {
  return (
    <div>
        <Formik initialValues={{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
            gender:"",
            location:"",
            role:"",
        }} validationSchema={Yup.object({
          firstName: Yup.string()
              .required("First Name is required.")
              .trim()
              .max(55, "FirstName must be at max 55 characters.")
              .min(3, "FirstName must be at least 3 characters."),
              lastName: Yup.string()
              .required(" Last Name is required.")
              .trim()
              .max(55, "Last Name must be at max 55 characters.")
              .min(3, "Last Name must be at least 3 characters."),
            email: Yup.string()
              .email("Must be valid email.")
              .max(50, "Email must be at max 50 characters.")
              .trim()
              .lowercase()
              .required("Email is required."),
  
            password: Yup.string()
              .required("Password is required.")
              .trim()
              .max(21, "Password must be at max 21 characters."),
              confirmPassword: Yup.string()
              .required("Confirm Password is required.")
              .trim()
              .max(21, "Confirm Password must be at max 21 characters."),
              gender:Yup.string()
              .required(" Gender is required.")
              .trim()
              .max(55, "Gender must be at max 55 characters.")
              .min(3, "Gender must be at least 3 characters."),
              location:Yup.string()
              .required(" location is required.")
              .trim()
              .max(55, "location must be at max 55 characters.")
              .min(3, "location must be at least 3 characters."),
              role:Yup.string()
              .required(" role is required.")
              .trim()
              .max(55, "role must be at max 55 characters.")
              .min(3, "role must be at least 3 characters."),

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
                            <Typography variant="h3">Register</Typography>
                            <FormControl> 
                                <TextField label="First Name" {...formik.getFieldProps("firstName")}/>
                                {formik.touched.firstName && formik.errors.firstName ?(<FormHelperText error>{formik.errors.firstName}</FormHelperText>):null}
                            </FormControl>
                            <FormControl> 
                                <TextField label="Last Name" {...formik.getFieldProps("lastName")}/>
                                {formik.touched.lastName && formik.errors.lastName ?(<FormHelperText error>{formik.errors.lastName}</FormHelperText>):null}
                            </FormControl>
                            <FormControl> 
                                <TextField label="email" {...formik.getFieldProps("email")}/>
                                {formik.touched.email && formik.errors.email ?(<FormHelperText error>{formik.errors.email}</FormHelperText>):null}
                            </FormControl>
                            <FormControl> 
                                <TextField label="password" {...formik.getFieldProps("password")}/>
                                {formik.touched.password && formik.errors.password ?(<FormHelperText error>{formik.errors.password}</FormHelperText>):null}
                            </FormControl>
                            <FormControl> 
                                <TextField label="confirmPassword" {...formik.getFieldProps("confirmPassword")}/>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ?(<FormHelperText error>{formik.errors.confirmPassword}</FormHelperText>):null}
                            </FormControl>
                            <FormControl> 
                                <TextField label="gender" {...formik.getFieldProps("gender")}/>
                                {formik.touched.gender && formik.errors.gender ?(<FormHelperText error>{formik.errors.gender}</FormHelperText>):null}
                            </FormControl>
                            <FormControl> 
                                <TextField label="location" {...formik.getFieldProps("location")}/>
                                {formik.touched.location && formik.errors.location ?(<FormHelperText error>{formik.errors.location}</FormHelperText>):null}
                            </FormControl>
                            <FormControl> 
                                <TextField label="role" {...formik.getFieldProps("role")}/>
                                {formik.touched.role && formik.errors.role ?(<FormHelperText error>{formik.errors.role}</FormHelperText>):null}
                            </FormControl>

                            <Button type="submit" color="secondary" variant="contained">Register</Button>
                          </form>
                    )
                }
            }
          </Formik>
    </div>
  )
}

export default RegisterForm