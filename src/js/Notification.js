import { formatCurrency } from "./utils";
import classNames from "classnames";


export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    this.notificationDiv = document.querySelector('.notifications')
  }

  render({_type, _price}) {
  //  console.log(_price)
    const template = `
<div class="notification type-${_type} ${classNames({
  "is-danger": _type === 'hawaiian',
})}">
  <button class="delete"></button>
  🍕 <span class="type">${_type}</span> (<span class="price">${formatCurrency(_price)}</span>) has been added to your order.
</div>
    `;
    this.container.innerHTML = template;
    this.notificationDiv.appendChild(this.container);
   // document.getElementsByClassName('notifications')[0].appendChild(this.container);
    let closeBtns= document.getElementsByClassName('delete');
    for(const btn of closeBtns) {
      btn.addEventListener('click',()=>{
        btn.parentElement.remove();
      })
    }
  }

  empty() {
    document.querySelector('notifications').innerHTML=''
  }
}
