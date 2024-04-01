document.addEventListener('DOMContentLoaded', () => {
  typePayment();
})

window.addEventListener ('click', () => {
  typePayment();
})

function typePayment() {
  const courierDelivery = document.querySelector('.delivery_courier.active');
  const pick = document.querySelector('.payment_pickup');
  const courier = document.querySelectorAll('.payment_courier');
  
  if(courierDelivery) {
    pick.style.display = 'none';
    courier.forEach(item => {
      item.style.display = 'block';
    })
  } else {
    pick.style.display = 'block';
    courier.forEach(item => {
      item.style.display = 'none';
    });
  };
};
