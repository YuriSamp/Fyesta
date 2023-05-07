export function notifyMe(type: string) {
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    new Notification(`O tempo do ${type} acabou`);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification(`O tempo do ${type} acabou`);
      }
    });
  }
}
