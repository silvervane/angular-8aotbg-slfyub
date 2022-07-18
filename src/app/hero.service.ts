import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'https://data.coa.gov.tw/Service/OpenData/FromM/AquaticTransData.aspx';//設定要讀的api的位置
  
  constructor(private http:HttpClient) {}

  getHero(): string {
    return '英雄DADA';
  }
}
