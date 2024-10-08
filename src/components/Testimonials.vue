<script setup>
const testimonials = [
	{
		quote:
			"Image Blender has revolutionized the way I edit photos. Its intuitive interface and powerful blending tools have saved me countless hours of work. It's a game-changer for both amateur and professional photographers.",
		name: "Emily Chen",
		role: "Professional Photographer",
		image:
			"https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480",
	},
	{
		quote:
			"As a graphic designer, I've tried numerous image editing tools, but Image Blender stands out. Its seamless blending capabilities and user-friendly interface make it my go-to software for creating stunning visuals.",
		name: "Alex Rodriguez",
		role: "Senior Graphic Designer",
		image:
			"https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480",
	},
	{
		quote:
			"Image Blender has been a game-changer for our marketing team. We can now create eye-catching social media content in minutes, thanks to its diverse range of blending modes and effects. It's boosted our productivity significantly!",
		name: "Sarah Thompson",
		role: "Digital Marketing Manager",
		image:
			"https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480",
	},
	{
		quote:
			"As an amateur photographer, I was intimidated by complex editing software. Image Blender changed that for me. Its user-friendly interface and powerful features have helped me take my photography to the next level.",
		name: "Michael Lee",
		role: "Hobbyist Photographer",
		image:
			"https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480",
	},
	{
		quote:
			"Image Blender has become an essential tool in our product design process. Its ability to seamlessly blend different design elements has greatly improved our prototyping speed and final product quality.",
		name: "Lisa Nguyen",
		role: "Product Designer at TechCorp",
		image:
			"https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480",
	},
	{
		quote:
			"I've been using Image Blender for my art projects, and I'm blown away by its versatility. Whether I'm creating digital collages or enhancing photos, it offers the perfect balance of power and ease of use. Highly recommended!",
		name: "David Wilson",
		role: "Digital Artist",
		image:
			"https://img.freepik.com/free-photo/anime-style-mountains-landscape_23-2151135147.jpg?t=st=1724563736~exp=1724567336~hmac=500d1e19a752c9bd78fe033d37e2c82f4cdd21d7a96365dfcc6cb22ab1aac44b&w=1480",
	},
];
</script>

<template>
  <div class="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-custom-dark-400">
    <div class="mt-12 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 text-center">
      <h2 class="text-transparent bg-gradient-to-r from-sky-500 via-blue-500 via-20% to-purple-500 to-80% bg-clip-text font-inter text-xl md:text-2xl lg:text-3xl font-extrabold">
        What People Say About Image Blender
      </h2>
      <p class="text-base md:text-lg mt-4 text-gray-500 dark:text-gray-300">
        Explore amazing testimonials from our users
      </p>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="testimonial-grid">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out shadow-sm">
          <blockquote class="text-gray-800 dark:text-white mb-4 text-sm">
            "{{ testimonial.quote }}"
          </blockquote>
          <div class="flex items-center">
            <img :src="testimonial.image" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4" />
            <div>
              <div class="text-gray-900 dark:text-white font-semibold text-sm">{{ testimonial.name }}</div>
              <div class="text-gray-600 dark:text-gray-400 text-xs">{{ testimonial.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  grid-auto-flow: dense;
}

@media (min-width: 640px) {
  .testimonial-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .testimonial-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>