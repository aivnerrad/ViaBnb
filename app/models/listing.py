from .db import db
from sqlalchemy import DateTime
from sqlalchemy.sql.functions import now


class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(255), nullable=False)
    bedrooms = db.Column(db.Integer, nullable=False)
    bathrooms = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    monthly_price = db.Column(db.Integer, nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=now())
    updated_at = db.Column(DateTime(timezone=True), onupdate=now())
    reviews = db.relationship('Review', back_populates='listings', cascade="all, delete")
    amenities = db.relationship('Amenity', back_populates='listings', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'bedrooms': self.bedrooms,
            'bathrooms': self.bathrooms,
            'address': self.address,
            "monthly_price": self.monthly_price,
            "reviews": [review.to_dict() for review in self.reviews],
            "amenities": [amenities.to_dict() for amenities in self.amenities],
            "created_at": self.created_at,
            "updated_at": self.updated_at

        }
