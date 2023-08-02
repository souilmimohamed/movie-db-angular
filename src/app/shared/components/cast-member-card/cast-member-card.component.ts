import { Component, Input, OnInit } from '@angular/core';
import { castMember } from 'src/app/models/main.models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cast-member-card',
  templateUrl: './cast-member-card.component.html',
  styleUrls: ['./cast-member-card.component.scss'],
})
export class CastMemberCardComponent implements OnInit {
  @Input() castMember: castMember;
  memberImage: string;
  constructor() {}

  ngOnInit(): void {
    this.memberImage = `${environment.imgApi}${this.castMember.profile_path}`;
  }
}
