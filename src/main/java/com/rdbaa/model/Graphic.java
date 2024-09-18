//package com.lab_4.model;
//
//import org.springframework.stereotype.Component;
//
//@Component
//public class Graphic {
//
//    //entry point
//    public boolean isInArea(PointFromClient point) {
//        String data = point.getGraph();
//        int quadrantOfPoint = getQuadrantOfPoint(point.getX(), point.getY());
//        switch (quadrantOfPoint) {
//            case 1:
//                point.setGraph(data.substring(0, 2));
//                break;
//            case 2:
//                point.setGraph(data.substring(2, 4));
//                break;
//            case 3:
//                point.setGraph(data.substring(4, 6));
//                break;
//            case 4:
//                point.setGraph(data.substring(6, 8));
//                break;
//            case -1:
//                return false;
//        }
//
//        return getFigure(quadrantOfPoint, point);
//    }
//
//    private int getQuadrantOfPoint(double x, double y) {
//        if (x >= 0 && y >= 0)
//            return 1;
//        else if (x <= 0 && y >= 0)
//            return 2;
//        else if (x <= 0 && y <= 0)
//            return 3;
//        else if (x >= 0 && y <= 0)
//            return 4;
//        else return -1;
//    }
//
//    private boolean getFigure(int quadrant, PointFromClient point){
//        int typeOfFigure = Integer.parseInt(point.getGraph().substring(0,1));
//        int sizeOfFigure = Integer.parseInt(point.getGraph().substring(1,2));
//        double r = point.getR() * sizeOfFigure / 2;
//        switch (typeOfFigure){
//            case 0:
//                return false;
//            case 1:
//                return getSquare(point.getX(), point.getY(), r);
//            case 2:
//                return getTriangle(point.getX(), point.getY(), r);
//            case 3:
//                return getSector(point.getX(), point.getY(), r);
//        }
//        return false;
//    }
//
//    private boolean getSquare(double x, double y, double r) {
//        return Math.abs(x)<= r && Math.abs(y)<=r/2;
//    }
//    private boolean getTriangle(double x, double y, double r){
//        return Math.abs(x) + Math.abs(y)<= r/2;
//    }
//    private boolean getSector(double x, double y, double r){
//        return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2);
//
//    }
//}
