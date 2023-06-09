import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    // this.handleClick = this.handleClick.bind(this);
    this.toggleButton.addEventListener("click", this.handleClick.bind(this));
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    console.log(this.followState);

    (this.followState === "followed") ? this.unfollow() : this.follow();
  }

  async follow() {
    // Your code here
    console.log("You're following")
  }

  async unfollow() {
    // Your code here
    console.log("You're no longer following")
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}