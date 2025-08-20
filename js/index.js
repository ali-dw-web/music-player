 
 window.addEventListener('load', () => {
    playPause()
         let saved = JSON.parse(localStorage.getItem('playlist'));
    if (saved && saved.length > 0) {
        saved.forEach((id) => {
            g = id; 
            up();
        });
        status();
    }
        document.querySelector('.top_menu>div:nth-of-type(1)').style.transform = 'translateX(0px)'
        document.querySelector('.top_menu>div:nth-of-type(1)').style.opacity = '1'
        document.querySelector('.top_menu>div:nth-of-type(2)').style.transform = 'translateY(0px)'
        document.querySelector('.top_menu>div:nth-of-type(2)').style.opacity = '1'
        document.querySelector('.top_menu>div:nth-of-type(3)').style.transform = 'translateX(0px)'
        document.querySelector('.top_menu>div:nth-of-type(3)').style.opacity = '1'
        document.getElementsByClassName('anim')[0].style.transform = 'translateY(0px)'
        document.getElementsByClassName('anim')[0].style.opacity = '1'
    })

    window.addEventListener('scroll', (() => {

        if (scrollY > 550) {
            document.querySelector('.org>div:nth-of-type(1)').style.transform = 'translateX(0px)'
            document.querySelector('.org>div:nth-of-type(1)').style.opacity = '1'
            document.querySelector('.org>div:nth-of-type(2)').style.transform = 'translateY(0px)'
            document.querySelector('.org>div:nth-of-type(2)').style.opacity = '1'
            document.querySelector('.org>div:nth-of-type(3)').style.transform = 'translateX(0px)'
            document.querySelector('.org>div:nth-of-type(3)').style.opacity = '1'
        } else {
            document.querySelector('.org>div:nth-of-type(1)').style.transform = 'translateX(-100px)'
            document.querySelector('.org>div:nth-of-type(1)').style.opacity = '0'
            document.querySelector('.org>div:nth-of-type(2)').style.transform = 'translateY(100px)'
            document.querySelector('.org>div:nth-of-type(2)').style.opacity = '0'
            document.querySelector('.org>div:nth-of-type(3)').style.transform = 'translateX(100px)'
            document.querySelector('.org>div:nth-of-type(3)').style.opacity = '0'
        }
        if (scrollY > 20) {
           
            document.querySelector('#main>div:nth-of-type(1)>div:nth-of-type(1)').style.height = '85px'
            document.querySelector('#main>div:nth-of-type(1)>div:nth-of-type(1)').style.backgroundColor = '#444444'
            document.querySelector('#main>div:nth-of-type(1)>div:nth-of-type(1)').style.position = 'fixed'
            document.querySelector('#main>div:nth-of-type(1)>div:nth-of-type(1)').style.zIndex = '19000'
        } else {
            document.querySelector('#main>div:nth-of-type(1)>div:nth-of-type(1)').style.height = '140px'
            document.querySelector('#main>div:nth-of-type(1)>div:nth-of-type(1)').style.backgroundColor = 'transparent'
            document.querySelector('#main>div:nth-of-type(1)>div:nth-of-type(1)').style.position = 'static'
        }
        if (scrollY > 500) {
            document.getElementsByClassName('player')[0].style.bottom = '3%'
        }

    }))
    const All = [
        {
            id: 0,
            name: 'Moein',
            music: 'https://xx.sahand-music.ir/Archive/m/moein/Moein%20-%20Havas/03%20Panjereh.mp3',
            musicname: 'Panjereh',
            pic: 'pic.lg/images (1).jfif'

        },
        {
            id: 1,
            name: 'Moein',
            music: 'https://xx.sahand-music.ir/Archive/m/moein/Moein%20-%20Lahzeha/04%20Yade%20Tou.mp3',
            musicname: 'Yade Tou',
            pic: 'pic.lg/images (2).jfif'

        },
        {
            id: 2,
            name: 'Moein',
            music: 'https://xx.sahand-music.ir/Archive/M/Moein/Moein%20-%20Bibi%20Gol/05%20Khooneh.mp3',
            musicname: 'Khoneh',
            pic: 'pic.lg/images (3).jfif'

        },
        {
            id: 3,
            name: 'Moein',
            music: 'https://xx.sahand-music.ir/Archive/m/moein/Moein%20-%20Panjareh/03%20Ham%20Ghasam.mp3',
            musicname: 'Ham Ghasam',
            pic: 'pic.lg/images (4).jfif'

        },
        {
            id: 4,
            name: 'Moein',
            music: 'https://dl.beroosic.ir/music/1404/2/Tou-Khoubi.mp3',
            musicname: 'Tou Khoubi',
            pic: 'pic.lg/images (5).jfif'

        },
        {
            id: 5,
            name: 'Moein',
            music: 'https://dl.mehrdl.top/Music/A/B/Album/MoeinLahzeha/03%20Ghasam%20Nakhour.mp3',
            musicname: 'Ghasam Nakhor',
            pic: 'pic.lg/images.jfif'

        },
        {
            id: 6,
            name: 'Ghomeyshi',
            music: 'https://dl.mehrdl.top/Music/A/F/siavash-gheseyegol/01%20Ghoroub.mp3',
            musicname: 'Ghoroub',
            pic: 'pic.lg/download (2).jfif'

        },
        {
            id: 7,
            name: 'Ghomeyshi',
            music: 'https://dl.mehrdl.top/Music/A/F/Siavashghomeyshi-Hekayat/01%20Hekayat.mp3',
            musicname: 'Hekayat',
            pic: 'pic.lg/download (1).jfif'

        },
        {
            id: 8,
            name: 'Ghomeyshi',
            music: 'https://dl.mehrdl.top/Music/A/A/Album/Siavash%20Ghomayshi%20-%20Yadegari/01%20Yadegari.mp3',
            musicname: 'Yadegari',
            pic: 'pic.lg/download (3).jfif'

        },
        {
            id: 9,
            name: 'Ghomeyshi',
            music: 'https://dl.mehrdl.top/Music/A/A/Album/Siavash%20Ghomayshi%20-%20Yadegari/09%20Kalafe.mp3',
            musicname: 'Kalaafeh',
            pic: 'pic.lg/download (4).jfif'


        },
        {
            id: 10,
            name: 'Ghomeyshi',
            music: 'https://dl.mehrdl.top/Music/A/G/Jadid/Navazesh%20-%20Siavash%20Ghomayshi%20(128).mp3',
            musicname: 'Navazesh',
            pic: 'pic.lg/download (5).jfif'

        },
        {
            id: 11,
            name: 'Ghomeyshi',
            music: 'https://xx.sahand-music.ir/Archive/S/Siavash%20Ghomayshi/Siavash%20Ghomayshi%20-%20Khaabe%20Baroon/06%20Peyvastegi.mp3',
            musicname: 'Peyvastegi',
            pic: 'pic.lg/download (6).jfif'

        },
        {
            id: 12,
            name: 'Hayedeh',
            music: 'https://dl.mehrdl.top/Music/A/F/Hayede-Bezantar/05%20Aroosak.MP3',
            musicname: 'Arousak',
            pic: 'pic.lg/download (7).jfif'

        },
        {
            id: 13,
            name: 'Hayedeh',
            music: 'local m/hayedeh (2) (1).mp3',
            musicname: ' Ey Khoda',
            pic: 'pic.lg/download (8).jfif'

        },
        {
            id: 14,
            name: 'Hayedeh',
            music: 'https://xx.sahand-music.ir/Archive/h/hayedeh/Hayedeh%20-%20Shanehayat%20Ra%20Baraye%20Geryeh%20Kardan/05%20Ravi.mp3',
            musicname: 'Ravi',
            pic: 'pic.lg/download (9).jfif'

        },
        {
            id: 15,
            name: 'Hayedeh',
            music: 'https://dl.mehrdl.top/Music/A/F/hayede-zendegisalam/3.Jadoo.mp3',
            musicname: 'Jado',
            pic: 'pic.lg/download (10).jfif'

        },
        {
            id: 16,
            name: 'Hayedeh',
            music: 'https://dl.mehrdl.top/Music/A/F/Hayedeh-golvajeh/8.Zahre%20Jodayei.mp3',
            musicname: 'Zahreh Jodaie',
            pic: 'pic.lg/download (11).jfif'

        },
        {
            id: 17,
            name: 'Hayedeh',
            music: 'https://dl.mehrdl.top/Music/A/F/Hayedeh-zendegi/2.Bezan%20Tar.mp3',
            musicname: 'Bezan Tar',
            pic: 'pic.lg/download (12).jfif'

        },
    ]
    let flag = 1
    const track = document.querySelector('#audio')
    playPause()
    function playPause() {
        console.log(track.paused);
        if (track.paused == true) {
            document.getElementById('play').setAttribute('class', 'icon-play')
        }else{
             document.getElementById('play').setAttribute('class', 'icon-pause')
        }
        
    }
    console.log(track);

    document.getElementsByClassName('play')[0].addEventListener('click', () => {
        if (track.paused) {
            
            track.play()
            playPause()
          


        } else {
          
            track.pause()
            playPause()
           
           
        }
       
    })
    function inf() {
        document.querySelector('.info>div:nth-of-type(1)>img').setAttribute('src', All[g].pic)
        document.querySelector('.info>div:nth-of-type(2)>p:first-child').innerHTML = All[g].musicname
        document.querySelector('.info>div:nth-of-type(2)>p:last-child').innerHTML = `Artist : ${All[g].name}`
    }
    let g = 0
    inf()
    document.querySelectorAll('.org>div>div>h5').forEach((i) => {
        i.addEventListener('click', ((s) => {
            
            let x = s.target.getAttribute('data-name')
            g = x

            document.getElementById('audio').setAttribute('src', All[g].music)

            track.play()
            inf()
            playPause()
           

        }))

    })
    function next() {

        g = Number(g) + 1
        inf()

        document.getElementById('audio').setAttribute('src', All[g].music)
        document.getElementById('audio').play()
        playPause()

    }
    function prev() {

        g = Number(g) - 1
        inf()

        document.getElementById('audio').setAttribute('src', All[g].music)
        document.getElementById('audio').play()
        playPause()
    }
    document.getElementsByClassName('icon-cancel-circled')[0].addEventListener('click', () => {
        document.getElementsByClassName('list')[0].style.right = '-100%'
    })
    document.getElementsByClassName('icon-menu-outline')[0].addEventListener('click', () => {
        document.getElementsByClassName('list')[0].style.right = '0'
    })
    let r = 0

    function upload() {
        document.querySelector('.icon-menu-outline>span').style.display = 'flex'
        if (document.getElementsByClassName('add')[0].innerHTML == '') {
            up();
            localStorage.setItem('first', All[g].id)
        } else {
            let x = document.querySelectorAll('.add > div');
            let yes = false;
            for (let h = 0; h < x.length; h++) {
                let num = x[h].getAttribute('data-st');
                if (num == All[g].id) {
                    document.querySelector('.icon-upload>span').style.opacity = '1'
                    document.querySelector('.icon-upload>span>span').style.width = '100%'
                    setTimeout(() => {
                        document.querySelector('.icon-upload>span').style.opacity = '0'

                    }, 3000)
                    setTimeout(() => {
                        document.querySelector('.icon-upload>span>span').style.width = '0'
                    }, 4000)
                    yes = true;
                    break;
                }
            }
            if (!yes) {
                up();
            }
        }
        status()



    }

    function del(s, event) {

        event.stopPropagation()
        s.parentElement.remove()
        r = r - 1
        status()


    }
    function up() {
        r = r + 1
        document.getElementsByClassName('add')[0].innerHTML += `<div class='tir'  onclick='pl(this)' data-st='${g}' style='width : 100% ;cursor : pointer; border-radius: 3px; border-bottom: 1px solid rgba(255, 255, 255, 0.281); height : 30px ; display : flex ; justify-content: start; align-items: center; '>
            <span  style='margin-left: 15px; color: white;'>${r}</span>
            <span  style='margin-left: 15px; color: white;'>${All[g].musicname}</span>
            <span  style='margin-left: 15px; color: white;'>${All[g].name}</span>
            <span onclick='del(this , event)' class='icon-cancel-circled'   style='margin-left: 15px; color: white;'></span>
            
            </div>`
    }
    function pl(s) {
        g = s.getAttribute('data-st')
        track.setAttribute('src', All[g].music)
        track.play()
        inf()


    }
    function status() {
        let r = document.querySelectorAll('.add > div')
        console.log(r.length);


        document.querySelector('.icon-menu-outline>span').innerHTML = r.length
        let listid = [];
        r.forEach(item => listid.push(item.getAttribute('data-st')));
        localStorage.setItem('playlist', JSON.stringify(listid));



    }
    let time = 0
    track.addEventListener('timeupdate' , ()=>{
        time = track.currentTime
        
        
        
    })
    document.getElementsByClassName('icon-angle-double-left')[0].addEventListener('click' , ()=>{
        // console.log(time);
        track.currentTime = time-5
    
    })
    document.getElementsByClassName('icon-angle-double-right')[0].addEventListener('click' , ()=>{
        // console.log(time);
        track.currentTime = time+5
    
    })
