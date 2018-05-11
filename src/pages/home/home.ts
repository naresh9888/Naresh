import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController, Button, Icon } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
import { Subscriber } from 'rxjs/Subscriber';
import { MusicPlayerPage } from '../../pages/music-player/music-player';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allMusic =[];
  constructor(public navCtrl: NavController, 
    private MusicProvider:MusicProvider,
    public loadingController: LoadingController,
     private actionSheetController: ActionSheetController,
     private SocialSharing:SocialSharing
    ) {
    


  }
  ionViewDidLoad(){
    let allMusicLoadingController = this.loadingController.create({
      content: "getting your song from server"
      
    });
    allMusicLoadingController.present();
    this.MusicProvider.getmusic()
    .subscribe((musicList) => 
    
    {
      allMusicLoadingController.dismiss();
      this.allMusic= musicList});
  }
  ShareSong(music){
    let ShareSongActionSheet = this.actionSheetController.create({
      title:"Share Song",
      buttons:[
        {
          text:"share on facebook",
          icon:"logo-facebook",
          handler:()=>{
            this.SocialSharing.shareViaFacebook(music.name, music.image, music.music_url);
          }
        },
        {
          text:"Twitter",
          icon:"logo-twitter",
          handler:()=>{
            this.SocialSharing.shareViaTwitter(music.name, music.image, music.music_url);
          }
        },
        {
          text: "share",
          icon:"share",
          handler:()=>{
            this.SocialSharing.share(music.name,"", music.image, music.music_url);
          }
        },
        {
          text:"cancel",
          role:"destructive"
        }
      ]
    });
      ShareSongActionSheet.present();
  }

  goToMusic(music){
this.navCtrl.push(MusicPlayerPage,{
music:music
});
}
}
