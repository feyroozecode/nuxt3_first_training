
<template>
    <div>
        <div class="footer">
            App Footer
        </div>
        <slot name="footer" />
    </div>
</template>

<style scoped>
    .footer {
        background-color: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
       
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;

    }
</style>