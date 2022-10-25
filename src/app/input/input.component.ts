import { Component } from '@angular/core';
import axios from 'axios';
import {HttpUrlEncodingCodec} from '@angular/common/http';
/**
 * @title Card with footer
 */
@Component({
  selector: 'card-footer-example',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
})
export class CardFooterExample {
messageFromApi256: any;
messageFromApi512: any;
messageFromApiWhirlpool: any;
  getMessage(message: string) {
    console.log(message);
  }

  // send message to the server
  sendMessage() {
    console.log('Sending message');
  }

  onSubmit(message: string, type: string) {
    const encoder = new HttpUrlEncodingCodec();
    const encodedMessage = encoder.encodeValue(message);
    console.log(encodedMessage);
    const data: Promise<any> = axios.get(`http://localhost:3000/message/${type}/${encodedMessage}`)
      .then((response) => {
        console.log(response.data);
        console.log(type);
        if (type === 'sha256') {
          this.messageFromApi256 = response.data;
        } else if (type === 'sha512') {
          this.messageFromApi512 = response.data;
        }else if (type === 'whirlpool') {
          this.messageFromApiWhirlpool = response.data;
        } 
      })
      .catch((error) => {
        console.log(error);
      });
      this.messageFromApi256 = data;
    this.sendMessage();
  }
}
