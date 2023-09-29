<template>
  <div class="wrapper">
    <div class="gantt">
      <div class="gantt__row gantt__row--months">
        <div class="gantt__row-first">{{ chosenDate }}</div>
        <span>00-02</span><span>02-04</span><span>04-06</span>
        <span>06-08</span><span>08-10</span><span>10-12</span>
        <span>12-14</span><span>14-16</span><span>16-18</span>
        <span>18-20</span><span>20-22</span><span>22-24</span>
      </div>
      <div class="gantt__row gantt__row--lines" data-time="5">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
        <span :class="{'marker' : !loading}"></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
      <template v-if="loading">
        <div class="mx-auto h-20">
          <div role="status">
              <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
          </div>
        </div>
      </template>
      <tempalte v-else-if="users.length > 0">
        <ul>
          <li v-for="(user, i) in users" :key="i" class="gantt__row">
              <div class="gantt__row-first">
                {{ `${user.firstName}` }}
              </div>
              <ul class="gantt__row-bars">
                <li style="grid-column: 4/11; background-color: #2ecaac;">Working Hours</li>
              </ul>
          </li>
        </ul>
      </tempalte>
      <template v-else-if="users.length === 0">
        <div class="gantt__row gantt__row--empty">
          <div class="gantt__row-first">
            Niall
          </div>
          <ul class="gantt__row-bars"></ul>
        </div>
        <div class="gantt__row">
          <div class="gantt__row-first">
            Sam
          </div>
          <ul class="gantt__row-bars">
            <li style="grid-column: 2/6; background-color: #ff6252;" class="stripes">Inital Work</li>
            <li style="grid-column: 7/11; background-color: #54c6f9;">End Day</li>
          </ul>
        </div>
        <div class="gantt__row">
          <div class="gantt__row-first">
            Hayley
          </div>
          <ul class="gantt__row-bars">
            <li style="grid-column: 2/5; background-color: #2ecaac;">Morning</li>
          </ul>
        </div>
        <div class="gantt__row">
          <div class="gantt__row-first">
            Sagar
          </div>
          <ul class="gantt__row-bars">
            <li style="grid-column: 3/11; background-color: #54c6f9;">Long Day</li>
          </ul>
        </div>

        <div class="gantt__row">
          <div class="gantt__row-first">
            Mark
          </div>
          <ul class="gantt__row-bars">
            <li style="grid-column: 4/9; background-color: #ff6252;" class="stripes">Working</li>
          </ul>
        </div>
      </template>
    </div>
	</div>
</template>

<script setup lang="ts">
defineProps({
  users: {
    type: Array,
    default: () => []
  },
  chosenDate: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,400,700");
/* body,
html {
  font-family: "Roboto", sans-serif;
  background-color: #cddade;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  color: #202125;
  margin-bottom: 40px;
}
.header h2 {
  font-weight: 600;
}
.header p {
  font-weight: 300;
} */

.wrapper {
  max-width: 100%;
  min-width: 700px;
  margin: 0 auto;
}

.gantt {
  display: grid;
  border: 0;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 75px 125px -57px #7e8f94;
}
.gantt .gantt__row {
  display: grid;
  grid-template-columns: 150px 1fr;
  background-color: #fff;
}
.gantt .gantt__row:nth-child(odd) {
  background-color: #f5f5f5;
}
.gantt .gantt__row:nth-child(odd) .gantt__row-first {
  background-color: #f5f5f5;
}
.gantt .gantt__row:nth-child(3) .gantt__row-bars {
  border-top: 0;
}
.gantt .gantt__row:nth-child(3) .gantt__row-first {
  border-top: 0;
}
.gantt .gantt__row--empty {
  background-color: #ffd6d2 !important;
  z-index: 1;
}
.gantt .gantt__row--empty .gantt__row-first {
  border-width: 1px 1px 0 0;
}
.gantt .gantt__row--lines {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: transparent;
  grid-template-columns: 150px repeat(12, 1fr);
}
.gantt .gantt__row--lines span {
  display: block;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.gantt .gantt__row--lines span.marker {
  background-color: rgba(10, 52, 68, 0.13);
  z-index: 2;
}
.gantt .gantt__row--lines:after {
  grid-row: 1;
  grid-column: 0;
  background-color: #1688b345;
  z-index: 2;
  height: 100%;
}
.gantt .gantt__row--months {
  color: #fff;
  background-color: #0a3444 !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  grid-template-columns: 150px repeat(12, 1fr);
}
.gantt .gantt__row--months .gantt__row-first {
  border-top: 0 !important;
  background-color: #0a3444 !important;
}
.gantt .gantt__row--months span {
  text-align: center;
  font-size: 13px;
  align-self: center;
  font-weight: bold;
  padding: 20px 0;
}
.gantt .gantt__row-first {
  background-color: #fff;
  border-width: 1px 0 0 0;
  border-color: rgba(0, 0, 0, 0.1);
  border-style: solid;
  padding: 15px 0;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
}
.gantt .gantt__row-bars {
  list-style: none;
  display: grid;
  padding: 9px 0;
  margin: 0;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 8px 0;
  border-top: 1px solid rgba(221, 221, 221, 0.8);
}
.gantt .gantt__row-bars li {
  font-weight: 500;
  text-align: left;
  font-size: 14px;
  min-height: 15px;
  background-color: #55de84;
  padding: 5px 12px;
  color: #fff;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
}
.gantt .gantt__row-bars li.stripes {
  background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255, 255, 255, 0.1) 5px, rgba(255, 255, 255, 0.1) 12px);
}
.gantt .gantt__row-bars li:before, .gantt .gantt__row-bars li:after {
  content: "";
  height: 100%;
  top: 0;
  z-index: 4;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
}
.gantt .gantt__row-bars li:before {
  left: 0;
}
.gantt .gantt__row-bars li:after {
  right: 0;
}</style>