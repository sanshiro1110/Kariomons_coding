const body=document.querySelector('body');const closeButton=document.querySelector('#btn-close');const backButton=document.querySelector('#back-button');const header=document.querySelector('header');const snsLinks=document.querySelector('#sns-links');const headerMainNav=document.querySelector('.header-main-nav');const headerSabNav=document.querySelector('.header-sab-nav');closeButton.addEventListener('click',function(){this.classList.toggle('close');header.classList.toggle('close');snsLinks.classList.toggle('close');headerMainNav.classList.toggle('close');headerSabNav.classList.toggle('close')});backButton.addEventListener('click',function(e){e.preventDefault();closeButton.classList.toggle('close');header.classList.toggle('close');snsLinks.classList.toggle('close');headerMainNav.classList.toggle('close');headerSabNav.classList.toggle('close')});function scrollRight(){const fixedContents=document.querySelector('#fixed-contents');function _changeLeftPosition(){fixedContents.style.left='-'+window.scrollX+'px'} window.addEventListener('scroll',_changeLeftPosition)} function noScroll(event){event.preventDefault()} function scrollControl(){document.addEventListener('touchmove',noScroll,{passive:!1});document.addEventListener('mousewheel',noScroll,{passive:!1})} function scrollRelease(){document.removeEventListener('touchmove',noScroll,{passive:!1});document.removeEventListener('mousewheel',noScroll,{passive:!1})} const mask=document.querySelector('#mask');const logoHide=document.querySelector('#logo-onMask');const topImage=document.querySelector('#top-image');const fixedAd=document.querySelector('#fixed-ad');function maskVisible(){mask.classList.add('visible')} function logoVisible(){logoHide.classList.add('visible')} function topImageHeight(){topImage.classList.add('visible')} function headerVisible(){header.classList.add('visible')} function headerHide(){closeButton.classList.toggle('close');header.classList.toggle('close');snsLinks.classList.toggle('close');headerMainNav.classList.toggle('close');headerSabNav.classList.toggle('close')} function fixedAdVisible(){fixedAd.classList.add('visible')} window.addEventListener('DOMContentLoaded',function(){scrollControl();logoVisible();scrollToTop();setTimeout(maskVisible,1000);setTimeout(scrollRelease,3000);setTimeout(scrollRight,3000);setTimeout(topImageHeight,3400);setTimeout(headerVisible,3400);setTimeout(headerHide,4400);setTimeout(fixedAdVisible,5000)});function getScrolled(){return(window.pageYOffset!==undefined)?window.pageYOffset:document.documentElement.scrollTop} function scrollToTop(){let scrolled=getScrolled();window.scrollTo(0,Math.floor(scrolled/2));if(scrolled>0){window.setTimeout(scrollToTop,30)}};const today=new Date();let year=today.getFullYear();let month=today.getMonth();function getCalendarHead(){const dates=[];const d=new Date(year,month,0).getDate();const n=new Date(year,month,1).getDay();for(let i=0;i<n;i ++){dates.unshift({date:d-i,day:new Date(year,month-1,d-i).getDay(),isToday:!1,isDisabled:!0,holiday:!1,})} return dates} function getCalendarBody(){const dates=[];const lastDate=new Date(year,month+1,0).getDate();for(let i=1;i<=lastDate;i ++){dates.push({date:i,day:new Date(year,month,i).getDay(),isToday:!1,isDisabled:!1,holiday:!1,})} if(year===new Date().getFullYear()&&month===new Date().getMonth()){dates[today.getDate()-1].isToday=!0} return dates} function getCalendarTail(){const dates=[];const lastDay=new Date(year,month+1,0).getDay();for(let i=1;i<7-lastDay;i ++){dates.push({date:i,day:new Date(year,month+1,i).getDay(),isToday:!1,isDisabled:!0,holiday:!1,})} return dates} function renderWeeks(){const weeks=[];const dates=[...getCalendarHead(),...getCalendarBody(),...getCalendarTail(),];const weeksCount=dates.length/7;for(let i=0;i<weeksCount;i ++){weeks.push(dates.splice(0,7))} weeks.forEach(week=>{const tr=document.createElement('tr');week.forEach(date=>{const td=document.createElement('td');td.textContent=date.date;if(date.isToday){td.classList.add('today')} if(date.isDisabled){td.classList.add('disable')} if(date.day===2||date.day===4){date.holiday=!0} if(date.holiday){td.classList.add('holiday')} tr.appendChild(td)});document.querySelector('tbody').appendChild(tr)})} function clearCalendar(){const tbody=document.querySelector('tbody');while(tbody.firstChild){tbody.removeChild(tbody.firstChild)}} function renderTitle(){const title=document.querySelector('#title');title.textContent=`${year}.${String(month + 1).padStart(2, '0')}`} function createCalendar(){clearCalendar();renderTitle();renderWeeks()} document.querySelector('#prev').addEventListener('click',function(){month --;if(month<0){month=11;year --} createCalendar()});document.querySelector('#next').addEventListener('click',function(){month ++;if(month>11){month=0;year ++} createCalendar()});createCalendar()


