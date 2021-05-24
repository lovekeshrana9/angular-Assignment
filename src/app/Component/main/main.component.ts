import { Component, OnInit } from '@angular/core';
import { IFeature } from './Interface/mainInterface';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css','./main.mediaqueries.css']
})
export class MainComponent implements OnInit {

    columnOneFeatureData: IFeature[];
    columnTwoFeatureData: IFeature[];
    url: string = "assets/Images/";

    constructor() { }

    ngOnInit() {
        this.columnOneFeatureData = [{
            circleImageUrl: `${this.url}Get Paid Instantly.png`,
            headingText: `Quick cash disbursement`,
            infoText: `Get term loans that your business needs within 72 hrs`
        },
        {
            circleImageUrl: `${this.url}Low interest rate.png`,
            headingText: `Low-interest rate`,
            infoText: `Achieve your financial goals with an amaxing interest rate starting at 13% per annum`
        },
        {
            circleImageUrl: `${this.url}Secure Payments.png`,
            headingText: `Zero Paperwork`,
            infoText: `Get started instantly by submitting only your basic details & bank statements`
        }];

        this.columnTwoFeatureData = [{
            circleImageUrl: `${this.url}freelancer_feature_icon_6@1.5x.png`,
            headingText: `Ace your business finances`,
            infoText: `Manage banking accounting & everything in between on one platform`
        },
        {
            circleImageUrl: `${this.url}Covid.png`,
            headingText: `Loans to fight COVID-19`,
            infoText: `Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh`
        }];
    }

}
