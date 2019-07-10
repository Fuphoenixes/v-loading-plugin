# rc-better-scroll
---

3. [项目源码](https://github.com/Fuphoenixes/rc-better-scroll)

## Examples
[demo](https://fuphoenixes.github.io/rc-better-scroll/example/build/)

## Install

```
npm install vue-loading-plugin
```
或
```
yarn add vue-loading-plugin
```


## Usage

```
import Srcoll from 'rc-better-scroll';

render() {
    return (
      <div className={styles.list}>
        <Scroll
          noMore={this.props.noMore}
          pullDownRefresh={this.pullDownRefresh}
          pullUpLoad={this.pullUpLoad}
        >
          <ul>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
            <li>aaaaaasdadwd</li>
          </ul>
        </Scroll>
      </div>
    );
}

```

## API
具体选项的含义请参考[Better-Scroll中文文档](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans)

### 选项
| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| probeType | Number | 3 | 我们需要知道滚动的位置， 当probeType为0：不派发滚动事件；为1：非实时（屏幕滑动超过一定时间后）派发scroll 事件； 为2：实时的派发 scroll 事件； 为 3 ：屏幕滑动的过程中和momentum 滚动动画运行过程中实时派发 scroll 事件 |
| click | Boolean | true| better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件。但是自定义的 click 事件会阻止一些原生组件的行为，如 checkbox 的选中等，所以一旦滚动列表中有一些原生表单组件，推荐的做法是监听 tap 事件（*暂未实现tap*）或者 在需要click的原生Dom添加`orginEvent`类名 |
| scrollY | Boolean | true | 默认允许Y轴滚动 |
| scrollX | Boolean | false | 默认阻止X轴滚动 |
| bounce | Boolean | true | 是否开启回弹 |
| disabled | Boolean | false | 是否禁用 better-scroll |
| stopPropagation | Boolean | false | 默认不阻止事件冒泡 |
| pullUpLoad | Function | null | 上拉加载时触发的异步加载数据的方法,需要返回Promise来刷新BetterScroll,resolve加载成功，reject加载失败，建议直接使用async await
| pullDownRefresh | Function | null | 下拉加载时的回调函数,需要返回一个Promise来刷新BetterScroll,resolve刷新成功，reject刷新失败,建议直接使用async await
| doScroll | Function | null | 滚动时的触发回调函数 |
| doScrollStart | Function | null | 滚动开始时的触发事件 |
| doScrollEnd | Function | null | 滚动结束时的操作 |
| isPullUpTipHide | Boolean | true | 主要用于在上拉加载可用时，若列表数据不足一页，则要隐藏底部提示；若超过一页则显示。 |

