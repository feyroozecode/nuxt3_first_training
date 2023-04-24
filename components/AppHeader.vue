
<template>
    <div class="flex">
        <div class="header flex flex-auto">
           <div class="text-green bg-green-500 rounded-full p-2">
            App Header
           </div>
            <div class="grid align-middle ">
                <ul class="align-sub p-2">
                    <li>
                        <NuxtLink to="/">Accueil</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/events">Events</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
       
        <slot name="header" />
        
    </div>
</template>

<style scoped>
    .header {
        background-color: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
    }

</style>