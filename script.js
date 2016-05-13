// Пример объектов с наледованием.
	function Men(name){
			this.name = name;
			this.count = 0;
		}
		Men.prototype.stop = function(){
			this.count = 0;
			console.log('я остановился');
		};
		Men.prototype.walk = function(){
			this.count++;
			if(this.count < 2){
				console.log('Я, ' + this.name + ' и я иду');
			} else if(this.count < 3) {
				console.log('Это опять ' + this.name + ' и я все еще иду');
			} else {
				console.log('Все, я устал и хочу остановиться');
				this.stop();
			}
		};
		var men = new Men('Сергей');
		men.walk();
		men.walk();
		men.walk();

		function Children(name){
			this.name = name;
			this.jump = 0;
		}
		Children.prototype = Object.create(Men.prototype);
		Children.prototype.constructor = Children;

		Children.prototype.jampa = function(){
			this.jump++;
			if(this.jump < 2){
				console.log('Меня зовут ' + this.name + ' и я прыгаю');
			} else {
				console.log('все устал прыгать');
				this.stop();
			}
		};
		var child = new Children('Дима');
		child.jampa();
		child.jampa();


		// Эта часть кода показывает текс если наводить на синий и зеленые части экрана
	var showTooltip;

		document.onmouseover = function(event){
			var target = event.target;

			var tooltipe = target.getAttribute('data-tooltip');
			if(!tooltipe) return;

			var tooltipeElem = document.createElement('div');
			tooltipeElem.className = 'tool';
			tooltipeElem.innerHTML = tooltipe;
			document.body.appendChild(tooltipeElem);

			var coords = target.getBoundingClientRect();

			var left = coords.left + (target.offsetWidth - tooltipeElem.offsetWidth) / 2;
			if(left < 0) left = 0;

			var top = coords.top - tooltipeElem.offsetHeight - 5;
			if(top < 0){
				top = coords.top + tooltipeElem.offsetHeight + 5;
			}
			tooltipeElem.style.left = left + 'px';
			tooltipeElem.style.top = top + 'px'

			showTooltip = tooltipeElem;
		};

		document.onmouseout = function(event){
			if(showTooltip){
				document.body.removeChild(showTooltip);
				showTooltip = null;
			}
		};


	// А сдесь выводит то что написал в инпате.
	function Submit() {
			var inputValues = document.querySelector('#enterValue').value;
			var li = document.createElement('li');
			li.className = 'list';
			li.innerHTML = inputValues;
			var outputValues = document.querySelector('#outputValues');
		
			outputValues.appendChild(li);
		}
