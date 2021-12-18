from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    listingId = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    imageURL = db.Column(db.String, nullable=False)
    listing = db.relationship('Listing', back_populates='images', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'imageURL': self.imageURL,
            'listingId': self.listingId
        }
