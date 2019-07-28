<template>
  <section class="flex flex-wrap bg-gray-200 py-6">
    <div
      class="flex flex-col justify-around items-center w-5/6 md:w-1/2 mx-auto text-center animated zoom-in"
    >
      <picture>
        <!--<source srcset="/img/me@2x.webp 2x" type="image/webp" />-->
        <!--<source srcset="/img/me.webp 2x" type="image/webp" />-->
        <!--<source srcset="/img/me@2x.jpg 2x" type="image/jpeg" />-->
        <!--<source srcset="/img/me.jpg" type="image/jpeg" />-->
        <img
          class="rounded-full border-solid border-4 shadow-inset mb-4 w-64 h-64"
          height="256"
          width="256"
          alt="That's me :)"
         :src="picture"
        />
      </picture>
      <div>
        <h1 class="mb-2 font-400 text-2xl md:text-3xl">
          {{name}}
        </h1>
        <h2 class="font-hairline text-gray-700 text-base md:text-xl">
          Developer &bull; Founder
        </h2>
      </div>
      <div class="flex">
        <a
          class="text-center text-gray-600 no-underline bg-gray-400 px-3 py-2 m-2 rounded hover:text-black"
          v-bind:href="github"
          rel="noreferrer noopener"
          target="_blank"
          title="My GitHub account"
          @click="trackIconClick('github')"
        >
          <Icon
            path="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"
          />
        </a>
        <a
          class="text-center text-gray-600 no-underline bg-gray-400 px-3 py-2 m-2 rounded hover:text-black"
          v-bind:href="linkedin"
          rel="noreferrer noopener"
          target="_blank"
          title="My Linkedin account"
          @click="trackIconClick('linkedin')"
        >
          <Icon
            path="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51C510 22.95 487.05 0 459 0z
             M153 433.5H76.5V204H153V433.5z M114.75 160.65c-25.5 0-45.9-20.4-45.9-45.9s20.4-45.9 45.9-45.9s45.9 20.4 45.9 45.9
            S140.25 160.65 114.75 160.65z M433.5 433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25 17.851-38.25 38.25V433.5H204
            V204h76.5v30.6c12.75-20.4 40.8-35.7 63.75-35.7c48.45 0 89.25 40.8 89.25 89.25V433.5z"
            viewBox="0 0 510 510" preserveAspectRatio="xMidYMin slice"
          />
        </a>
        <a
          class="text-center text-gray-600 no-underline bg-gray-400 px-3 py-2 m-2 rounded hover:text-black"
          v-bind:href="xing"
          rel="noreferrer noopener"
          target="_blank"
          title="My Linkedin account"
          @click="trackIconClick('xing')"
        >
          <Icon
            path="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
            C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
            h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
            C438.532,59.576,430.49,40.204,414.41,24.123z M124.486,292.64H71.665c-3.046,0-5.33-1.242-6.851-3.72
            c-1.713-2.663-1.713-5.325,0-7.991l55.961-98.779v-0.284L85.083,120.19c-1.521-3.234-1.615-5.996-0.284-8.277
            c1.521-2.092,3.996-3.142,7.423-3.142h52.532c5.898,0,10.847,3.239,14.845,9.712c23.982,42.062,35.974,63.188,35.974,63.382
            l-56.811,100.49C135.146,289.207,130.388,292.64,124.486,292.64z M373.724,47.967L256.953,254.383v0.287l74.236,135.895
            c1.708,2.854,1.811,5.523,0.281,7.994c-1.328,2.282-3.706,3.429-7.132,3.429h-52.534c-6.091,0-11.04-3.333-14.845-9.992
            c-49.678-91.17-74.612-136.948-74.8-137.328L299.501,46.529c3.617-6.665,8.277-9.994,13.986-9.994h53.393
            c3.23,0,5.509,1.143,6.851,3.427C375.253,42.25,375.253,44.917,373.724,47.967z"
            viewBox="0 0 438.536 438.536" preserveAspectRatio="xMidYMin slice"
          />
        </a>
        <a
          class="text-center text-gray-600 no-underline bg-gray-400 px-3 py-2 m-2 rounded hover:text-teal-700"
          v-bind:href="email"
          rel="noreferrer noopener"
          title="Send me an e-mail!"
          @click="trackIconClick('mail')"
        >
          <Icon
            path="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"
            view-box="0 0 1792 1792"
          />
        </a>
        <a
          class="text-center text-gray-600 no-underline bg-gray-400 px-3 py-2 m-2 rounded hover:text-green-600"
          v-bind:href="phone"
          rel="noreferrer noopener"
          title="Hotline Bling?"
          @click="trackIconClick('phone')"
        >
          <Icon
            path="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"
          />
        </a>
        <a
          class="text-center text-gray-600 no-underline bg-gray-400 px-3 py-2 m-2 rounded hover:text-blue-500"
          v-bind:href="twitter"
          rel="noreferrer noopener"
          target="_blank"
          title="I'm on Twitter as well"
          @click="trackIconClick('twitter')"
        >
          <Icon
            path="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Icon: () => import('~/components/Icon')
  },
  computed: {
    resume() {
      return this.$store.getters.getResume;
    },
    picture() {
      return this.resume.basics.picture;
    },
    name() {
      return this.resume.basics.name;
    },
    phone() {
      return 'tel:' + this.resume.basics.phone;
    },
    email() {
      return 'mailto:' + this.resume.basics.email;
    },
    github() {
      return 'https://github.com/' + this.resume.profiles.github;
    },
    linkedin() {
      return 'https://www.linkedin.com/in/' + this.resume.profiles.linkedin;
    },
    xing() {
      return 'https://www.xing.com/profile/' + this.resume.profiles.xing;
    },
    twitter() {
      return 'https://twitter.com/' + this.resume.profiles.twitter;
    }
  },
  methods: {
    trackIconClick(iconType) {
      this.$ga.event({
        eventCategory: 'click',
        eventAction: `${iconType}Icon`
      })
    }
  }
}
</script>

<style>
@keyframes zoom-in {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoom-in {
  animation-name: zoom-in;
}
</style>
