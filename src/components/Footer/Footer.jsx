import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className="text-center text-white" style={{ backgroundColor: '#8D8F90' }}>
        <div className="container p-4 pb-0">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    Contact by mail
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="form5Example29" className="form-control" />
                    <label className="form-label" htmlFor="form5Example29">Email address</label>
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: '#595A5B' }}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">&nbsp;CashTrust.com</a>
        </div>
      </div>
    </>
  )
}
