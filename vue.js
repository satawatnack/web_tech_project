class Card {
    constructor(link, title, img, location, text) {
        this.link = link;
        this.title = title;
        this.img = img;
        this.location = location;
        this.text = text;
    }
}

const app = new Vue({
    el: '#app',
    data: {
        search: '',
        cardlist: [
            new Card(
                'noth-content/first.html',
                'อุทยานประวัติศาสตร์กำแพงเพชร',
                'img/south.jpg',
                'จังหวัดกำแพงเพชร',
                'brand new hotel in pattaya! i\'ve always thought the what ever photos they post in agoda doesnt really look like what theactual hotel is.but i was wrong, beside the hotel is'
            ),
            new Card(
                'noth-content/second.html',
                'อุทยานประวัติศาสตร์ศรีสัชนาลัย',
                'img/south.jpg',
                'จังหวัดกำแพงเพชร',
                'brand new hotel in pattaya! i\'ve always thought the what ever photos they post in agoda doesnt really look like what theactual hotel is.but i was wrong, beside the hotel is'
            ),
            new Card(
                '#',
                'def',
                'img/south.jpg',
                'จังหวัดกำแพงเพชร',
                'brand new hotel in pattaya! i\'ve always thought the what ever photos they post in agoda doesnt really look like what theactual hotel is.but i was wrong, beside the hotel is'
            ),
            new Card(
                '#',
                'ghj',
                'img/south.jpg',
                'จังหวัดกำแพงแสน',
                'brand new hotel in pattaya! i\'ve always thought the what ever photos they post in agoda doesnt really look like what theactual hotel is.but i was wrong, beside the hotel is'
            ),
        ]
    },
    computed: {
        filterCard() {
            return this.cardlist.filter(card => {
                return card.title.includes(this.search) || card.location.includes(this.search);
            })
        }
    },
})