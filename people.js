function People() {
    
    return {
        test() {
            console.log('test', this);
        },
        join(slogan) {
            var li = document.createElement('li');
            var h1 = document.createElement('h1');
            
            var txt = document.createTextNode(slogan);
            h1.appendChild(txt);
            li.appendChild(h1);

            var div = document.createElement('div');
            div.className = 'p1';
            li.appendChild(div);

            var top = Math.floor((Math.random() * 90) + 5);
            var left = Math.floor((Math.random() * 99) + 1);
            li.style.top = top + '%';
            li.style.left = '105%';

            document.getElementById('scene').appendChild(li);
        }
    };
}

var people = new People();
people.test();
people.join('Нахуй пошли все!');

window.setInterval(function() {
    people.join('Нахуй пошли все!');
}, 500);