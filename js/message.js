(function () {
    function createLi(item){
        let li=document.createElement('li')
        let img=new Image(38,38)
        let nickName=document.createElement('span')
        let user=document.createElement('div')
        let commentsText=document.createElement('p')
        user.append(img,nickName)
        li.append(user,commentsText)

        user.className='comments-user'
        commentsText.className='comments-text'
        li.classList.add('comments-li')

        img.src='avatar.jpg'

        nickName.innerText=item.name
        commentsText.innerHTML=item.content

        return li
    }
    let model = {
        // 获取数据
        init: function () {
            var APP_ID = 't7gkIMdwW5vVGKrv6PHNXlvj-gzGzoHsz';
            var APP_KEY = 'O1Y30UaAAS5RxJhOD5XWTq4B';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function () {
            let query=new AV.Query('Message')
            return query.find() // Promise对象
        },
        save: function (name, content) {
            // 声明类型
            var Message = AV.Object.extend('Message');
            // 新建对象
            var message = new Message();
            return message.save({ //Promise 对象
                name:name,
                content:content,
            })
        }

    }
    let view = document.querySelector('#comments')
    let controller = {
        view: null,
        model: null,
        messageList: null,
        init: function (view, model) {
            this.view=view
            this.model=model

            this.messageList=view.querySelector('#messageList')
            this.form=view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function () {
            this.model.fetch().then(
                (message)=>{
                    let array=message.map((item)=>item.attributes)
                    for(let i=0;i<10;i++){
                            let li=createLi(array[i])
                            this.messageList.append(li)
                    }
                }
            )
        },
        bindEvents: function () {
            this.form.addEventListener('submit',function(e){
                e.preventDefault()
                this.saveMessage()

            }.bind(this))
        },
        saveMessage: function () {
            let myForm=this.form
            let content=editor.txt.html()
            let name=myForm.querySelector('input[name=name]').value

            this.model.save(name,content).then(function(obj){

                let li=createLi(obj.attributes)
                this.messageList.append(li)
            })
        }
    }

    controller.init(view, model)


}())
