<template>
  <section class="container mx-auto pt-8">
    <div class="w-5/6 sm:w-2/3 mx-auto">
      <h2 class="text-2xl font-bold text-center mb-8 mt-0 underline">
        My Timeline
      </h2>
      <ul class="timeline timeline-centered">

        <TimelineItem :period="true" v-for="(p, index) in projects" :key="index" v-bind:title="p.name" v-bind:url="p.url">
          {{ p.description }}
        </TimelineItem>

        <br>
        <h2 class="text-2xl font-bold text-center mb-8 mt-0 underline">
          Professional Experience
        </h2>

        <!--<TimelineItem :period="true" title="Founded Developmint" when="August 2015">-->
          <!--Not even a month after finishing my Abitur, I founded my own company together with two friends.-->
          <!--<a-->
            <!--class="developmint"-->
            <!--href="http://bit.ly/KookydroidApps"-->
            <!--rel="noreferrer noopener"-->
            <!--target="_blank"-->
            <!--v-text="'Kookydroid'"-->
          <!--/>-->
          <!--<small class="text-xs text-gray-900" v-text="'(fancy, eh?)'" />-->
          <!--fulfills contract work for mid-sized businesses as well as single persons. Our core competencies are-->
          <!--web apps, websites and MacOS/iOS apps. We have done a range of work by now, ranging from simple but-->
          <!--good-looking portfolio pages to complex-->
          <!--business tools.<br><br>-->
          <!--<strong>Interested?</strong>-->
          <!--<a-->
            <!--class="text-gray-900 hover:text-black underline"-->
            <!--href="mailto:inquiry@lichter.io?subject=Inquiry&body=Hey%20Alex!%0D%0AI've%20seen%20your%20website%20and%20would%20like%20to%20talk%20to%20you%20about%20......."-->
          <!--&gt;Drop me a line!</a><span v-text="'😉'" />-->
        <!--</TimelineItem>-->

        <TimelineItem v-for="(w, index) in work" :key="index" v-bind:title="w.company" v-bind:when="w.startDate + ' - ' + w.endDate">
          {{ w.summary }}
        </TimelineItem>

        <br>
        <h2 class="text-2xl font-bold text-center mb-8 mt-0 underline">
          Education
        </h2>

        <TimelineItem v-for="(e, index) in education" :key="index" v-bind:title="e.institution" v-bind:when="e.startDate + ' - ' + e.endDate">
          {{ e.area }}
        </TimelineItem>

        <br>
        <h2 class="text-2xl font-bold text-center mb-8 mt-0 underline">
          Languages
        </h2>

        <TimelineItem v-for="(l, index) in languages" :key="index" v-bind:title="l.language">
          <b>{{l.level}}</b> - {{ l.fluency }}
        </TimelineItem>

        <TimelineItem :period="true" title="I was born 🤰🏼👶🏼" when="1996" />
      </ul>
    </div>
  </section>
</template>

<script>
import TimelineItem from '~/components/TimelineItem.vue'

export default {
  name: 'Timeline',
  components: { TimelineItem },
  computed: {
    resume() {
      return this.$store.getters.getResume;
    },
    work() {
      return this.resume.work;
    },
    education() {
      return this.resume.education;
    },
    languages() {
      return this.resume.languages;
    },
    projects() {
      return this.resume.projects;
    },
  }

}
</script>

<!--<style lang="postcss">-->
  <!--.developmint {-->
    <!--color: #15831d;-->
    <!--text-decoration: none;-->

    <!--&:hover {-->
      <!--text-decoration: underline;-->
    <!--}-->
  <!--}-->

  <!--.timeline {-->
    <!--@apply .w-full .text-gray-600;-->

    <!--line-height: 1.4em;-->

    <!--h1, h2, h3, h4, h5, h6 {-->
      <!--@apply .text-black;-->
      <!--line-height: inherit;-->
    <!--}-->
  <!--}-->

  <!--.timeline-item {-->
    <!--@apply .relative .pl-8;-->
    <!--&:last-child {-->
      <!--@apply pb-0;-->
    <!--}-->
  <!--}-->

  <!--.timeline-info {-->
    <!--@apply .mb-2 .font-bold .text-xs .tracking-wide .uppercase .whitespace-no-wrap;-->
  <!--}-->

  <!--.timeline-marker {-->
    <!--@apply .absolute .inset-y-0 .left-0 .w-8;-->

    <!--&:before {-->
      <!--@apply .absolute .left-0 .block .h-4 .w-4 .bg-gray-400;-->
      <!--content: "";-->
      <!--top: 4px;-->
      <!--transition: background 0.2s ease-in-out;-->
    <!--}-->

    <!--&:after {-->
      <!--@apply .absolute .bottom-0 .block .bg-gray-400;-->
      <!--content: "";-->

      <!--width: 3px;-->

      <!--top: 24px;-->
      <!--left: 6px;-->
    <!--}-->

    <!--.timeline-item:last-child &:after {-->
      <!--content: none;-->
    <!--}-->
  <!--}-->

  <!--.timeline-item:not(.period):hover .timeline-marker:before {-->
    <!--@apply .bg-red-600;-->
  <!--}-->

  <!--.timeline-content {-->
    <!--padding-bottom: 40px;-->

    <!--p:last-child {-->
      <!--@apply .mb-0;-->
    <!--}-->
  <!--}-->

  <!--.timeline-item:not(.period):hover .timeline-info,-->
  <!--.timeline-item:not(.period):hover .timeline-content {-->
    <!--@apply .text-gray-900;-->
  <!--}-->

  <!--.timeline-split {-->
    <!--@screen sm {-->
      <!--.timeline {-->
        <!--@apply .table;-->
      <!--}-->

      <!--.timeline-item {-->
        <!--@apply .table-row .p-0;-->
      <!--}-->

      <!--.timeline-info,-->
      <!--.timeline-marker,-->
      <!--.period .timeline-info {-->
        <!--@apply .table-cell .align-top;-->
      <!--}-->

      <!--.timeline-marker {-->
        <!--@apply .relative;-->
      <!--}-->

      <!--.timeline-content {-->
        <!--@apply .block .m-0 .p-0 .mt-4 .mb-4;-->
        <!--padding-left: 30px;-->
      <!--}-->

      <!--.timeline-info {-->
        <!--padding-right: 30px;-->
      <!--}-->

      <!--.period .timeline-title {-->
        <!--@apply .relative;-->
        <!--left: -45px;-->
      <!--}-->
    <!--}-->
  <!--}-->

  <!--.timeline-centered {-->
    <!--@extend .timeline-split;-->
    <!--@screen md {-->
      <!--&,-->
      <!--.timeline-item,-->
      <!--.timeline-info,-->
      <!--.timeline-marker,-->
      <!--.timeline-content {-->
        <!--@apply .block .m-0 .p-0;-->
      <!--}-->

      <!--.timeline-item {-->
        <!--@apply .overflow-hidden;-->
        <!--padding-bottom: 40px;-->
      <!--}-->

      <!--.timeline-marker {-->
        <!--@apply .absolute;-->
        <!--left: 50%;-->
        <!--margin-left: -7.5px;-->
      <!--}-->

      <!--.timeline-info,-->
      <!--.timeline-content {-->
        <!--width: 50%;-->
      <!--}-->

      <!--&gt; .timeline-item:nth-child(odd) .timeline-info,-->
      <!--&gt; .timeline-item:nth-child(even) .timeline-content {-->
        <!--@apply .float-left .text-right;-->
        <!--padding-right: 30px;-->
      <!--}-->

      <!--&gt; .timeline-item:nth-child(odd) .timeline-content,-->
      <!--&gt; .timeline-item:nth-child(even) .timeline-info {-->
        <!--@apply .float-right .text-left;-->
        <!--padding-left: 30px;-->
      <!--}-->

      <!--&gt; .timeline-item.period .timeline-content {-->
        <!--@apply .float-none .p-0 .w-full .text-center;-->
      <!--}-->

      <!--.timeline-item.period {-->
        <!--padding: 50px 0 90px;-->
      <!--}-->

      <!--.period .timeline-marker:after {-->
        <!--@apply .bottom-0;-->
        <!--height: 30px;-->
        <!--top: auto;-->
      <!--}-->

      <!--.period .timeline-title {-->
        <!--left: auto;-->
      <!--}-->
    <!--}-->
  <!--}-->

<!--</style>-->

<!--<style>-->
  <!--.timeline-both-side{-->
    <!--float: left;-->
    <!--width: 96%;-->
    <!--margin: 20px 2% 50px;-->
    <!--position: relative;-->
    <!--box-sizing: border-box;-->
  <!--}-->
  <!--.timeline-both-side:before{-->
    <!--background-color: #ccc;-->
    <!--bottom: 0;-->
    <!--content: " ";-->
    <!--left: 50%;-->
    <!--position: absolute;-->
    <!--top: 0;-->
    <!--width: 1px;-->
  <!--}-->
  <!--.timeline-both-side:after{-->
    <!--border-radius: 50%;-->
    <!--bottom: -22px;-->
    <!--content: "";-->
    <!--height: 18px;-->
    <!--left: 50%;-->
    <!--margin-left: -11px;-->
    <!--position: absolute;-->
    <!--width: 18px;-->
    <!--border: 2px solid #ccc;-->
  <!--}-->
  <!--.timeline-both-side li {-->
    <!--position: relative;-->
    <!--float: left;-->
    <!--width: 100%;-->
  <!--}-->
  <!--.timeline-both-side li .border-line{-->
    <!--background-color: #ccc;-->
    <!--font-size: 1.4em;-->
    <!--height: 1px;-->
    <!--left: 50%;-->
    <!--margin-left: -8%;-->
    <!--position: absolute;-->
    <!--text-align: center;-->
    <!--top: 50%;-->
    <!--width: 8%;-->
    <!--z-index: 100;-->
  <!--}-->
  <!--.timeline-both-side li:nth-child(odd) .border-line{-->
    <!--left: auto;-->
    <!--right: 50%;-->
    <!--margin-left: 0;-->
    <!--margin-right: -8%;-->
  <!--}-->
  <!--.timeline-both-side li .border-line:before {-->
    <!--background-color: #ccc;-->
    <!--content: "";-->
    <!--height: 7px;-->
    <!--position: absolute;-->
    <!--right: -4px;-->
    <!--top: -3px;-->
    <!--width: 7px;-->
  <!--}-->
  <!--.timeline-both-side li:nth-child(odd) .border-line:before{-->
    <!--left: -4px;-->
    <!--right: auto;-->
  <!--}-->
  <!--.timeline-both-side li .timeline-description{-->
    <!--border-radius: 2px;-->
    <!--background-color: #f1f1f1;-->
    <!--border: 1px solid #ccc;-->
    <!--float: left;-->
    <!--font-size: 13px;-->
    <!--padding: 10px;-->
    <!--position: relative;-->
    <!--width: 42%;-->
  <!--}-->
  <!--.timeline-both-side li:nth-child(odd) .timeline-description{-->
    <!--float: right;-->
  <!--}-->

  <!--li:nth-child(odd) {-->
    <!--color: green;-->
  <!--}-->

  <!--.timeline-both-side li .date{-->
    <!--/*background-color: #ccc;*/-->
    <!--font-size: 1.4em;-->
    <!--/*height: 100%;*/-->
    <!--right: 50%;-->
    <!--right: 8%;-->
    <!--position: absolute;-->
    <!--text-align: center;-->
    <!--margin-top: -15px;-->
    <!--top: 50%;-->
    <!--width: 50%;-->
    <!--z-index: 100;-->
  <!--}-->
  <!--.timeline-both-side li:nth-child(odd) .date{-->
    <!--right: auto;-->
    <!--margin-left: 8%;-->
  <!--}-->
  <!--/*.timeline-both-side li .date:before {*/-->
    <!--/*background-color: #ccc;*/-->
    <!--/*content: "";*/-->
    <!--/*height: 7px;*/-->
    <!--/*position: absolute;*/-->
    <!--/*left: -4px;*/-->
    <!--/*top: -3px;*/-->
    <!--/*width: 7px;*/-->
  <!--/*}*/-->
  <!--.timeline-both-side li:nth-child(odd) .date:before{-->
    <!--right: -4px;-->
    <!--left: auto;-->
  <!--}-->

<!--</style>-->
<style lang="scss">
  $primary-color: #FF6B6B;
  $primary-color-hover: scale-color($primary-color, $lightness: 32%);
  /*==================================
    TIMELINE
==================================*/

  /*-- GENERAL STYLES
  ------------------------------*/
  .timeline {
    line-height: 1.4em;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    h1, h2, h3, h4, h5, h6 {
      line-height: inherit;
    }
  }

  /*----- TIMELINE ITEM -----*/

  .timeline-item {
    padding-left: 40px;
    position: relative;
  &:last-child {
     padding-bottom: 0;
   }
  }

  /*----- TIMELINE INFO -----*/

  .timeline-info {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    margin: 0 0 .5em 0;
    text-transform: uppercase;
    white-space: nowrap;
  }
  /*----- TIMELINE MARKER -----*/

  .timeline-marker {
    position: absolute;
    top: 0; bottom: 0; left: 0;
    width: 15px;
  &:before {
     background: $primary-color;
     border: 3px solid transparent;
     border-radius: 100%;
     content: "";
     display: block;
     height: 15px;
     position: absolute;
     top: 4px; left: 0;
     width: 15px;
     transition: background 0.3s ease-in-out,
     border 0.3s ease-in-out;
   }
  &:after {
     content: "";
     width: 3px;
     background: #CCD5DB;
     display: block;
     position: absolute;
     top: 24px; bottom: 0; left: 6px;
   }
  .timeline-item:last-child &:after {
                               content: none;
                             }
  }
  .timeline-item:not(.period):hover .timeline-marker:before {
    background: transparent;
    border: 3px solid $primary-color;
  }

  /*----- TIMELINE CONTENT -----*/

  .timeline-content {
    padding-bottom: 40px;
  p:last-child {
    margin-bottom: 0;
  }
  }

  /*----- TIMELINE PERIOD -----*/

  .period {
    padding: 0;
  .timeline-info {
    display: none;
  }
  .timeline-marker {
  &:before {
     background: transparent;
     content: "";
     width: 15px;
     height: auto;
     border: none;
     border-radius: 0;
     top: 0;
     bottom: 30px;
     position: absolute;
     border-top: 3px solid #CCD5DB;
     border-bottom: 3px solid #CCD5DB;
   }
  &:after {
     content: "";
     height: 32px;
     top: auto;
   }
  }
  .timeline-content {
    padding: 40px 0 70px;
  }
  .timeline-title {
    margin: 0;
  }
  }

  /*----------------------------------------------
      MOD: TIMELINE SPLIT
  ----------------------------------------------*/

  .timeline-split {
  @media (min-width: 768px) {
    .timeline {
      display: table;
    }
    .timeline-item {
      display: table-row;
      padding: 0;
    }
    .timeline-info,
    .timeline-marker,
    .timeline-content,
    .period .timeline-info {
      display: table-cell;
      vertical-align: top;
    }
    .timeline-marker {
      position: relative;
    }
    .timeline-content {
      padding-left: 30px;
    }
    .timeline-info {
      padding-right: 30px;
    }
    .period .timeline-title {
      position: relative;
      left: -45px;
    }
  }
  }

  /*----------------------------------------------
      MOD: TIMELINE CENTERED
  ----------------------------------------------*/

  .timeline-centered {
  @extend .timeline-split;
  @media (min-width: 992px) {
  &,
    .timeline-item,
    .timeline-info,
    .timeline-marker,
    .timeline-content {
      display: block;
      margin: 0;
      padding: 0;
    }
    .timeline-item {
      padding-bottom: 40px;
      overflow: hidden;
    }
    .timeline-marker {
      position: absolute;
      left: 50%;
      margin-left: -7.5px;
    }
    .timeline-info,
    .timeline-content {
      width: 50%;
    }
    > .timeline-item:nth-child(odd) .timeline-info {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .timeline-item:nth-child(odd) .timeline-content {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .timeline-item:nth-child(even) .timeline-info {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .timeline-item:nth-child(even) .timeline-content {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .timeline-item.period .timeline-content {
      float: none;
      padding: 0;
      width: 100%;
      text-align: center;
    }
    .timeline-item.period {
      padding: 50px 0 90px;
    }
    .period .timeline-marker:after {
      height: 30px;
      bottom: 0;
      top: auto;
    }
    .period .timeline-title {
      left: auto;
    }
  }
  }

  /*----------------------------------------------
      MOD: MARKER OUTLINE
  ----------------------------------------------*/

  .marker-outline {
  .timeline-marker {
  &:before {
     background: transparent;
     border-color: $primary-color;
   }
  }
  .timeline-item:hover .timeline-marker:before {
    background: $primary-color;
  }
  }
</style>
