<template>
    <div id="main">
        <Header title="Mike"/>
        <div id="content">
            <Login />
        </div>
        <TabBar />
    </div>
</template>

<script>
    import Header from '../Header/Index';
    import TabBar from '../TabBar/Index';
    import Login from '../Login/Index';
    export default {
        name: "Mine",
        components:{
            Header,
            TabBar,
            Login
        }
    }
</script>

<style scoped>

</style>
