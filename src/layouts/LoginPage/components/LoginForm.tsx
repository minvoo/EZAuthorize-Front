export const LoginForm = () => {
return (<div className="container login-container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 login-form-1">
                <h3>Zaloguj się</h3>
                <form>
                  <div className="form-group">
                    <label className="form-label mt-3 mb-1">Login</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label mt-3 mb-1">Hasło</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <input type="submit" className="btnSubmit" value="Login" />
                  </div>
                  <div className="form-group">
                    <a href="/register" className="ForgetPwd">
                      Nie masz konta? Zarejestuj się
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
);
};