const React =  require('react');
const siteConfig = require(`${process.cwd()}/siteConfig.js`);
const Component = React.Component;
function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

class Button extends Component{
  render(){
    const {text,img,blue,link ,className} = this.props;
    return (
      <a href={link} class={'btn ' + (blue ? 'blue':'') + ( className ? ` ${className} ` : '')}>
        <img src={imgUrl(img)}/>
        <span>{text}</span>
      </a>
    )
  }
}
class Intro extends Component{
  render(){
    return (
      <div class='intro-box'>
        <div class='wrap'>
          <div class='main-content'>
            <img class='pag' src={imgUrl('new_official_website/fill2.png')}/>
            <div>
              <div class='paragraph'>
                <span class='strong'>
                Portable Animated Graphics </span>  是一套完整的跨平台渲染动画工作<br/>
                流，支持Android、iOS、web、windows、mac OS、Linux各平台，<br/>
                支持AE动画实时渲染、运行时编辑，可以广泛应用于UI动画、贴纸 <br/>
                动画、视频编辑、模板设计等场景。<br/>
              </div>
              <div class='paragraph'>
                <span class='strong'>PAG </span> 动画工作流包括AE导出插件、桌面预览工具和跨平台渲染SDK<br/>
                三部分。
              </div>
            </div>
            <div class='btn-bar'>
              <Button img={'new_official_website/download.png'} text='免费下载' className='download-btn' blue={true}/>
            </div>
            <span class='tip'>
            </span>
          </div>
          <img class='logo-l' src={imgUrl('new_official_website/logo_l.png')}/>
        </div>
      </div>
    )
  }
}

class Chapter extends Component{
  render(){
    const { idx,content ,title,link} = this.props;
    const numImg = imgUrl(`new_official_website/number_${idx+1}.png`);
       // thumbImg = imgUrl(`new_official_website/intro_${idx+1}.png`);
    let isOdd = idx%2 == 1
    return (
      <div class='chapter'>
        {
          idx === 0 ? <img class='feature' src={imgUrl('new_official_website/feature.png')}/> : null
        }
        <div class={'wrap '+(isOdd?'reverse':'')}>
          <div class={'detail ' + (isOdd?'reverse':'')}>
              <img class='num' src={numImg}></img>
              <div class='title'>{title}</div>
              {content()}
              <div class={'btn-bar'+(isOdd?' reverse':'')}>
                <Button link={link} text='了解更多' img={'new_official_website/more-b.png'}></Button>
              </div>
          </div>
          <div class='empty'></div>
          <canvas class='pagView' width='578px' height='390px'></canvas>
        </div>
        {
          idx !== 4 ? <img class={'arrow '+( isOdd ? 'reverse':'')} src={imgUrl(`new_official_website/arrow.png`)}/> : null
        }
      </div>
    )
  }
}
class Main extends Component{
  render(){
    return (
      <div class='main'>
        {
          [{
            title:"文件体积小",
            content:()=>{//1
              return (
                <div class='text'>
                  导出相同的 AE 动画内容，在文件解码速度和压缩<br/>
                  率上均大幅领先于同类型方案。采用可扩展的二进<br/>
                  制文件格式，可集成包含图片等任意设计资源的单<br/>
                  文件。
                </div>
              )
            }
          },
          {
            title:"AE 特性全面支持",
            content:()=>{//2
              return (
                <div class='text'>
                  在纯矢量导出方式上支持更多 AE 特性的同时，还<br/>
                  引入了视频序列帧结合矢量的混合导出能力，实现<br/>
                  支持所有 AE 特性的同时又能保持动画运行时的可<br/>
                  编辑性。
                </div>
              )
            }
          },{
            title:"完善的桌面工具",
            content:()=>{//3
              return (
                <div class='text'>
                提供从「导出插件」到「桌面预览」等一系列完善<br/>
                的桌面效率工具，让设计师可以所见即所得地生产<br/>
                素材，研发无需介入还原效果，极大降低了设计与<br/>
                研发的对接成本。
                </div>
              )
            }
          },{
            title:"性能监测可视化",
            content:()=>{//4
              return (
                <div class='text'>
                  通过导出插件内置的自动优化策略，以及预览工具<br/>
                  集成的性能监测面板，能够直观地看到每个素材的<br/>
                  性能状态，以帮助设计师制作效果和性能俱佳的动<br/>
                  画特效。
                </div>
              )
            }
          },{
            title:"运行时可编辑",
            content:()=>{//5
              return (
                <div class='text'>
                  运行时，可在保留动画效果前提下，动态修改替换<br/>
                  文本或替换占位图内容，甚至对任意子图层进行增<br/>
                  删改及移动，轻松实现照片和视频模板等素材的批<br/>
                  量化生产。
                </div>
              )
            }
          }].map((unit,idx)=>{
            return (
              <Chapter idx={idx}
                      link={siteConfig.links.feature[idx]}
                      content={unit.content}
                      title={unit.title}/>
            )
          })
        }
      </div>
    )
  }
}
class Partner extends Component{
  render() {
    return (
      <div class='partner'>
        <div class='wrap'>
          <img class='users' src={imgUrl(`new_official_website/user.png`)}/>
          <div class='title'>他们都在使用……</div>
          <div class='gallery'>
          {
            siteConfig.users.filter(unit=>unit.pinned).map(unit=>{
              return (
                <a class='item' href={unit.infoLink}>
                  <img class='thumb' src={unit.image}/>
                  <div class='name'>{unit.caption}</div>
                </a>
              )
            })
          }
          </div>
          <div class='btn-bar'>
            <Button text='查看更多' link='/users.html' img={'new_official_website/more-b.png'}></Button>
          </div>
        </div>
      </div>
      );
  }
}
class Download extends Component{
  render(){
    return (
      <div class='download' id='download'>
        <div class='wrap'>
          <div class='pkg'>
            <span class='pkg-download'></span>
            <a class='mac-download' href={siteConfig.links.download.mac}></a>
            <a class='win-download' href={siteConfig.links.download.win}></a>
          </div>
        </div>
      </div>
    )
  }
}

class CustomerService extends Component{
  render(){
    return (
      <div class='customer-service'>
        <div class='panel' id='js_cs_popup'>
          <div class='title'>
          你好：）
          </div>
          <div class='content'>
            这里是 PAG 团队，有任何问题，随时欢迎告诉我们，PAG 团队会尽力帮助你。在联系我们之前，你可以先查看下方的「常见问题」。
          </div>
          <div class='questions'>
            <div class='q-wrap'>
              {
                siteConfig.faq.map(unit=>{
                  return (
                    <div class='unit'>
                      <div class='unit-wrap'>
                        <a href={unit.link}>
                        Q ：{unit.issue}
                        </a>
                      </div>
                    </div> 
                  )
                })
              }
            </div>
          </div>
          <div class='more'>
              没有合适的答案 ？<br/>
              请前往<span class='strong'> <a href='/docs/install'>说明文档</a> </span> 或 <span class='strong'> <a class='js_qqgroup'>联系我们</a> </span>
          </div>
        </div>
        <img id='js_cs' src={imgUrl('new_official_website/cs.png')}/>
      </div>
    )
  }
}
class InjectScript extends Component{
  render(){
    return (
      <script
          dangerouslySetInnerHTML={{
              __html: `
              var csBtn = document.getElementById('js_cs');
              var popup = document.getElementById('js_cs_popup');
              csBtn.onclick = function(){
                var display = popup.style.display;
                popup.style.display = (!display || display == 'none')  ? 'block' : 'none'
              }
              `,
          }}
      />
    )
  }
}
class Index extends React.Component {
  render() {
    return (
      <div class='intro-container'>
        <Intro/>
        <Main/>
        <Partner/>
        <Download/>
        <CustomerService/>
        <InjectScript/>
      </div>
      );
  }
}

module.exports = Index;
