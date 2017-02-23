import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    
    <h3>Sign In</h3>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  `
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}