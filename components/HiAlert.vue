<script setup>

 const props = defineProps({
    message: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        default: '',
    },
   /*
    type: {
        type: String,
        default: 'info',
    },
    show: {
        type: Boolean,
        default: true,
    },
    dismissible: {
        type: Boolean,
        default: true,
    },
    dismissSecs: {
        type: Number,
        default: 5,
    },
    dismissCountDown: {
        type: Number,
        default: 0,
    },*/
 })

//const { type, message, show, dismissible, dismissSecs, dismissCountDown } = toRefs(props)

</script>

<template>
    <div>
        <span>
            {{ message }} <b> {{ name }} </b>
            <slot />
        </span>
    </div>
</template>