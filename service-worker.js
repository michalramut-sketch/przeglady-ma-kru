<!--
<script>
if('serviceWorker' in navigator){
 navigator.serviceWorker.register('./service-worker.js');
}
</script>
-->
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('fetch',e=>{});
