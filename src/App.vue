<template>
	<div class="app">
		<main>
			<header id="nav">
				<router-link to="/">Главная</router-link>
				<span class="separator">|</span>
				<router-link to="/add-new-article">Добавить новую запись</router-link>
			</header>
			<router-view />
		</main>
		<footer>© - {{ new Date().getFullYear() }}</footer>
	</div>
</template>

<style>
@import 'styles/index.css';

.app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

main {
	text-align: center;
	color: #2c3e50;
	padding: 0 5%;
	margin: 0 10px 20px;
	flex: 1 0 auto;
}

footer {
	border-top: 1px solid #bababa;
	margin-top: auto;
	padding: 20px 0;
	text-align: center;
	flex-shrink: 0;
}

#nav {
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.separator {
	margin: 0 10px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #548eaa;
}

@media (max-width: 400px) {
	#nav {
		flex-direction: column;
	}

	.separator {
		display: none;
	}
}
</style>
