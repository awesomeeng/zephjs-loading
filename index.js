let loader = ()=>{
	// add loading layer
	let container = document.createElement("div");
	container.style = "z-index: 9999999999; position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; background: white; font-family: sans-serif";
	document.body.appendChild(container);

	// add title
	let title = document.createElement("div");
	title.style = "font-size: 48px; font-weight: bold; color: black; padding: 25px 25px 10px 25px;letter-spacing: 8px;text-shadow: #A0A0A0 2px 2px 5px;";
	title.textContent = "loading...";
	container.appendChild(title);

	// add progress bar
	let bar = document.createElement("div");
	bar.style = "border: 1px solid #A0A0A0; min-width: 200px; max-width: 400px; width: 50%; height: 20px;margin: 0px 25px; overflow: hidden; padding: 1px 0px;";
	container.appendChild(bar);
	let inner = document.createElement("div");
	inner.style = "background: #3399FF; height: 100%; transition: width 0.5s, margin-left 0.25s;";
	inner.style.width = "50%";
	bar.appendChild(inner);

	// add footer
	let footer = document.createElement("a");
	footer.style = "position: absolute; bottom: 0px; left: 0px; right: 0px; background: black; color: white; font-size: 10px; padding: 5px 5px; text-align: right;";
	footer.textContent = "Built with ZephJS!";
	footer.setAttribute("href","http://zephjs.com");
	container.appendChild(footer);

	let loading = null;
	let loaded = null;
	let tick = 1;

	const update = ()=>{
		if (loading===null) {
			tick += 1;
			let start = (tick%150)-50;
			inner.style.width = "50%";
			inner.style.marginLeft = start+"%";
			setTimeout(update,20);
		}
		else {
			inner.style.marginLeft = "0px";
			inner.style.width = ((100/loading)*loaded)+"%";
		}
	};
	update();

	// wait for zeph:ready event
	document.addEventListener("zeph:loading",()=>{
		console.log("loading");
		loading = (loading===null ? 0 : loading) + 1;
		update();
	});
	document.addEventListener("zeph:loaded",()=>{
		console.log("loaded");
		loaded = (loaded===null ? 0 : loaded) + 1;
		update();
	});
	document.addEventListener("zeph:ready",()=>{
		console.log("ready");
		update();
		container.remove();
	});
};

let attempt = ()=>{
	if (document.body) {
		loader();
	}
	else {
		setTimeout(attempt,0);
	}
};

attempt();
