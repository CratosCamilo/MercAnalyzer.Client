import { useState } from "react";
import { RegisterFormProps } from "types/props";
import { iconGoogle } from "../../assets";
import { useRegisterUser } from "../../hooks";

export const RegisterForm = ({ isRegisterVisible }: RegisterFormProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const onSubmitRegister = useRegisterUser();
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return (
        <div
            className={`register-form ${isRegisterVisible ? "show" : ""}`}
        >
            <form className="form" onSubmit={onSubmitRegister}>
                <h2 className="title-form">Regístrese</h2>

                {/* FIELDS */}
                <div className="input-container">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" id="email" />
                    <div className="icon-mail"></div>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        id="password"
                        className="input-field"
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        type="button"
                        className={`icon-eye ${showPassword ? "" : "hide"}`}
                        onClick={togglePasswordVisibility}
                    ></button>
                </div>
                <div className="input-container">
                    <label htmlFor="password-confirm">Confirmar contraseña:</label>
                    <input
                        id="password-confirm"
                        className="input-field"
                        type={showPassword ? "text" : "password"}
                    />
                    <button
                        type="button"
                        className={`icon-eye ${showPassword ? "" : "hide"}`}
                        onClick={togglePasswordVisibility}
                    ></button>
                </div>

                {/* SUBMITE BUTTON */}
                <button type="submit" className="button-submit">
                    Registrarse
                </button>

                {/* OTHER OPTIONS */}
                <div className="others-options">
                    <div className="separator">
                        <span></span>
                        <div>o</div>
                        <span></span>
                    </div>
                    <button className="button-google" type="button">
                        <img className="icon-google" alt="google" src={iconGoogle} />
                        Registrarse con Google
                    </button>
                </div>
            </form>
        </div >
    );
}