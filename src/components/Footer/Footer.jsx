import React from 'react'

export const Footer = () => {
    return (
        <>
<div class="text-center text-white" style={{backgroundColor: '#8D8F90'}}>
  <div class="container p-4 pb-0">
    <section class="">
      <form action="">
        <div class="row d-flex justify-content-center">
          <div class="col-auto">
            <p class="pt-2">
              <p>Contact by mail</p>
            </p>
          </div>

          <div class="col-md-5 col-12">
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example29" class="form-control" />
              <label class="form-label" for="form5Example29">Email address</label>
            </div>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-light mb-4">
              Subscribe
            </button>
          </div>
        </div>

      </form>
    </section>

  </div>



  <div class="text-center p-3" style={{backgroundColor:'#595A5B'}}>
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">&nbsp;CashTrust.com</a>
  </div>

</div>
        </>
    )
}
