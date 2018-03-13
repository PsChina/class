function* helloWorldGenerator(){
	yield 'fasle';
	yield 'true';
	return 'done';
}

var g = helloWorldGenerator();

g.next();
//{value: "fasle", done: false}

g.next();
//{value: "true", done: false}

g.next();
//{value: "done", done: true}

var value = g.next().value; // 获取value