<template>
    <div>
        <section class="destination">
        <h1>{{destination.name}}</h1>
        <GoBack />
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.image">
            <p>{{destination.description}}</p>
        </div>
    </section>
    <section class="experiences">
        <h2>Top Experiences in {{destination.name}}</h2>
        <div class="cards">
            <router-link
            v-for="experience in  destination.experiences"
            :key="experience.slug"
            :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}"

            >
                <Experience 
                :experience="experience"
                />
            </router-link>
        </div>
        <router-view /> 
    </section>
    </div>
</template>

<script>
import sourceData from '@/data.json'
import Experience from '@/components/Experience.vue'
import GoBack from '@/components/GoBack.vue'
export default {
    components: {Experience, GoBack},
    props:{
        id: {type: Number, required: true}
    },
    computed: {
        destination() {
            return sourceData.destinations.find(
                (destination) => destination.id === this.id)
        }
    },
}
</script>















