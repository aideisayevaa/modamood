import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
function Login({ t, aLang, dispatch, users }) {
    const nav = useNavigate();
    const [registerUser, setRegisterUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        passwordAgain: "",
        active: false
    })
    const [checkUserData, setCheckUserData] = useState({
        email: "",
        password: ""
    })
    // const [singleActiveUser, setSingleActiveUser] = useState({})
    const handleUser = (e) => {
        users.map((user) => user.active = false)
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.value, active: true })

    }
    console.log(registerUser)
    const [wrong, setWrong] = useState(false)
    const [alertRegister, setAlertRegister] = useState("")

    const checkUser = (e) => {
        setCheckUserData({ ...checkUserData, [e.target.name]: e.target.value })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        if (registerUser.name === "" || registerUser.email === ""
            || registerUser.password === ""
            || registerUser.passwordAgain === ""
        ) {
            setAlertRegister("Bütün xanalar doldurulmalıdır.")
        }
        else if (users.find(a => a.email === registerUser.email)) {
            setAlertRegister("Bu email ilə artıq qeydiyyatdan keçilib.")
        }
        else if (registerUser.password !== registerUser.passwordAgain) {
            setAlertRegister("Parol ilə təkrar parol hissəsi eyni deyil!")
        }
        else if (!registerUser.email.includes("@")) {
            setAlertRegister("Email düzgün daxil edilməyib.")
        }
        else if (registerUser.name.length < 3) {
            setAlertRegister("Ad 3 hərfdən az olmamalıdır.")
        }
        else if (registerUser.password.length < 4) {
            setAlertRegister("Parolun uzunluğu 4-dən az olmamalıdır.")
        }
        else {
            // users.map((user) => user.active = false)

            users.push(registerUser)
            console.log(users.map((user) => {
                return `ad : ${user.name}  | active : ${user.active}  `
            }))
            dispatch({
                type: "REGISTER_USER",
                payload: [...users],
            });
            // setSingleActiveUser(users.find((user) => user.active === true))
            // dispatch({
            //     type: "SINGLE_USER",
            //     payload: singleActiveUser,
            // });
            setRegisterUser({
                name: "",
                email: "",
                phone: "",
                password: "",
                passwordAgain: "",
                active: false
            })
            nav("/")
        }


    }
    // console.log("active user : " + singleActiveUser.name)
    const handleCheck = (e) => {
        e.preventDefault()
        if (users.find((a) => a.email === checkUserData.email && a.password === checkUserData.password)) {
            // alert("Bu istifadeci tapildi")
            nav("/");
        }
        else {
            setWrong(true)
        }
    }
    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                <section id='login'>
                    <div className="login">
                        <input type="checkbox" id='login__check' />
                        <div className="login__banner">
                            <div className="welcome__back">
                                <Link to="/" className="logo"><img src="/logo.png" alt="" /></Link>
                                <div>
                                    <h2>{t[aLang].welcomeBack}</h2>
                                    <p>{t[aLang].welcomeBackSub}</p>
                                    <label htmlFor='login__check'>{t[aLang].login}</label>
                                </div>
                            </div>
                            <div className="welcome__to__website">
                                <Link to="/" className="logo"><img src="/logo.png" alt="" /></Link>
                                <div>
                                    <h2>{t[aLang].welcomeToWbesite}</h2>
                                    <p>{t[aLang].welcomeToWebsiteSub}</p>
                                    <label htmlFor='login__check'>{t[aLang].signUp}</label>
                                </div>

                            </div>
                        </div>
                        <div className="login__content">
                            <form className="welcome__back">
                                <h3>{t[aLang].register}</h3>
                                <input type="text" onChange={handleUser} value={registerUser.name} name='name' placeholder={t[aLang].name} />
                                <input type="email" onChange={handleUser} value={registerUser.email} name='email' placeholder={t[aLang].email} />
                                <input type="number" onChange={handleUser} value={registerUser.phone} name='phone' placeholder={t[aLang].phone} />
                                <input type="password" onChange={handleUser} value={registerUser.password} name='password' placeholder={t[aLang].password} />
                                <input type="password" onChange={handleUser} value={registerUser.passwordAgain} name='passwordAgain' placeholder={t[aLang].passwordAgain} /> <br />
                                <div className='wrong__message'> {alertRegister}</div>
                                <button onClick={handleRegister}>{t[aLang].register}</button>
                            </form>
                            <form className="welcome__to__website">
                                <h3>{t[aLang].login}</h3>
                                <input onChange={checkUser} name="email" value={checkUserData.email} type="email" placeholder={t[aLang].email} />
                                <input onChange={checkUser} name="password" value={checkUserData.password} type="password" placeholder={t[aLang].password} />
                                <div className='wrong__message'>{wrong ? "İstifadəçı tapılmadı." : ""}</div>
                                <button onClick={handleCheck}>{t[aLang].login}</button>
                            </form>
                        </div>
                    </div>
                </section>

            </motion.section>
        </>
    )
}
// const t = (a) => a
const t = (a) => a
export default connect(t)(Login)