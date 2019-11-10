import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import "ol/ol.css";
export default {
  data() {
    return {}
  },
  components: {},
  methods: {
      InitMap(){
        var map = new Map({
            target: 'OlMap',
            layers: [
              new TileLayer({
                source: new OSM()
              })
            ],
            view: new View({
                projection: "EPSG:4326",    //使用这个坐标系
                center: [114.064839,22.548857],  //深圳
                zoom: 12
            })
          });
      }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
      this.InitMap();
  },
  beforeDestory() {},
  destoryed() {}
}
