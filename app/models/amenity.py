from .db import db


class Amenity(db.Model):
    __tablename__ = 'amenities'

    id = db.Column(db.Integer, primary_key=True)
    listingId = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    iconURL = db.Column(db.String, nullable=False)
    listing = db.relationship('Listings', back_populates='amenities')

    def to_dict(self):
        return {
            'id': self.id,
            'imageURL': self.imageURL,
            'listingId': self.listingId
        }
