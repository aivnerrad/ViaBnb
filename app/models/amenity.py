from .db import db


class Amenity(db.Model):
    __tablename__ = 'amenities'

    id = db.Column(db.Integer, primary_key=True)
    listingId = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    iconURL = db.Column(db.String, nullable=False)
    listing = db.relationship('Listing', back_populates='amenities', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'iconURL': self.iconURL,
            'listingId': self.listingId
        }
