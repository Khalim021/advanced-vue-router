<template>
    <div class="card">
        <img :src="`/images/${experience.image}`" :alt="experience-image">
        <span class="card__text">
            {{experience.name}}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        experience: {type:Object, requierd: true}
    }
}
</script>





